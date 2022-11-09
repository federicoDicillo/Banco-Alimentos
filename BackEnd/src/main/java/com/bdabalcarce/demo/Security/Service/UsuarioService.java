package com.bdabalcarce.demo.Security.Service;

import com.bdabalcarce.demo.Security.Entity.Usuario;
import com.bdabalcarce.demo.Security.Repository.IUsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;


    @Service
    @Transactional
    public class UsuarioService {
        @Autowired
        IUsuarioRepo iusuarioRepo;

        public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
            return iusuarioRepo.findByNombreUsuario(nombreUsuario);
        }

        public boolean existsByNombreUsuario(String nombreUsuario){
            return iusuarioRepo.existsByNombreUsuario(nombreUsuario);
        }

        public void save(Usuario usuario){
            iusuarioRepo.save(usuario);
        }
    }


