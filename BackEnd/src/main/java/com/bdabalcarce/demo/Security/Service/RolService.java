package com.bdabalcarce.demo.Security.Service;

import java.util.Optional;
import javax.transaction.Transactional;

import com.bdabalcarce.demo.Security.Entity.Rol;
import com.bdabalcarce.demo.Security.Enums.RolNombre;
import com.bdabalcarce.demo.Security.Repository.IRolRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    @Autowired
    IRolRepo irolRepository;

    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return irolRepository.findByRolNombre(rolNombre);
    }

    public void save(Rol rol){
        irolRepository.save(rol);
    }
}
