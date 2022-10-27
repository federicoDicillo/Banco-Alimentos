package com.bdabalcarce.demo.Security.Service;

import com.bdabalcarce.demo.Security.Entity.Usuario;
import com.bdabalcarce.demo.Security.Entity.UsuarioPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsImp implements UserDetailsService {
    @Autowired
    UsuarioService usuarioServ;

    @Override
    public UserDetails loadUserByUsername(String nombreUsuario) throws UsernameNotFoundException {
        Usuario usuario = usuarioServ.getByNombreUsuario(nombreUsuario).get();
        return UsuarioPrincipal.build(usuario);
    }


}