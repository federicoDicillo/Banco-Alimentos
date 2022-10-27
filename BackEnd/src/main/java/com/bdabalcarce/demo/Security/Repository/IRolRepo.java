package com.bdabalcarce.demo.Security.Repository;

import com.bdabalcarce.demo.Security.Entity.Rol;
import com.bdabalcarce.demo.Security.Enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRolRepo extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
