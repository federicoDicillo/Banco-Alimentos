package com.bdabalcarce.demo.Security.Controller;

import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;

import com.bdabalcarce.demo.Security.Dto.JwtDTO;
import com.bdabalcarce.demo.Security.Dto.LoginUsuario;
import com.bdabalcarce.demo.Security.Dto.NuevoUsuario;
import com.bdabalcarce.demo.Security.Entity.Rol;
import com.bdabalcarce.demo.Security.Entity.Usuario;
import com.bdabalcarce.demo.Security.Enums.RolNombre;
import com.bdabalcarce.demo.Security.Jwt.JwtProvider;
import com.bdabalcarce.demo.Security.Service.RolService;
import com.bdabalcarce.demo.Security.Service.UsuarioService;
import com.bdabalcarce.demo.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping({"/auth"})
public class AuthController {

    @Autowired
    PasswordEncoder passEncoder;
    @Autowired
    AuthenticationManager authManager;
    @Autowired
    UsuarioService usuarioServ;
    @Autowired
    RolService rolServ;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/singin")
    public ResponseEntity<?> nuevo(@Valid @RequestBody NuevoUsuario nuevoUsuario, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity(new Message("Campos mal puestos"), HttpStatus.BAD_REQUEST);
        }

        if (usuarioServ.existsByNombreUsuario(nuevoUsuario.getNombreUsuario())) {
            return new ResponseEntity(new Message("Ese nombre de usuario ya existe"), HttpStatus.BAD_REQUEST);
        }



        Usuario usuario = new Usuario(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(),
                passEncoder.encode(nuevoUsuario.getPassword()));

        //Por defecto todos van a tener el Rol user a menos que contenga "admin"
        Set<Rol> roles = new HashSet<>();
        roles.add(rolServ.getByRolNombre(RolNombre.ROLE_USER).get());

        if (nuevoUsuario.getRoles().contains("admin")) {
            roles.add(rolServ.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        }
        usuario.setRoles(roles);
        usuarioServ.save(usuario);

        return new ResponseEntity(new Message("Usuario guardado."), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDTO> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity(new Message("Campos invalidos"), HttpStatus.BAD_REQUEST);
        }

        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginUsuario.getNombreUsuario(), loginUsuario.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generatedToken(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        JwtDTO jwtDto = new JwtDTO(jwt, userDetails.getUsername(), userDetails.getAuthorities());

        return new ResponseEntity(jwtDto, HttpStatus.OK);
    }

}
