package com.bdabalcarce.demo.controller;
import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.bdabalcarce.demo.service.UserS;

import javax.validation.Valid;
import java.util.List;
@RestController
@CrossOrigin(origins ="http://localhost:3000")
@RequestMapping({"/users"})
public class UserContr {
    @Autowired
    UserS userServ;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping ("/list")
    public ResponseEntity  list() {
        List<User> list = userServ.list();
        return new ResponseEntity (list, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/detail/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") int id) {
        if (!userServ.existById(id)) {
            return new ResponseEntity(new Message("No existe"), HttpStatus.NOT_FOUND);
        }
        User persona = userServ.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }
    @PostMapping("/create")

    public ResponseEntity<?> create(@RequestBody UserDto dtousuario) {
        if (StringUtils.isBlank(dtousuario.getUsername()) ||
                StringUtils.isBlank(dtousuario.getUserlastname()) ||
                StringUtils.isBlank(dtousuario.getUserdni())) {
        /*Si no se ingresan los campos userName, userLastname y userDni, reportará un
                BAD_REQUEST en consola con el siguiente msj y la info no se registrará*/
            return new ResponseEntity(new Message("Campos obligatorios: Nombre, Apellidoy Dni"), HttpStatus.BAD_REQUEST);
        }
        User usuario = new User(
                dtousuario.getUserdni(),
                dtousuario.getUserrol(),
                dtousuario.getUsername(),
                dtousuario.getUserlastname(),
                dtousuario.getUseremail(),
                dtousuario.getUserphone(),
                dtousuario.getUservehicle(),
                dtousuario.getUseravailability()
        );
        userServ.save(usuario);
        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }
}
