package com.bdabalcarce.demo.service;
import com.bdabalcarce.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bdabalcarce.demo.repository.UserRepo;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional

public class UserS {
    @Autowired
    UserRepo userR;

    public List<User> list() {
        return userR.findAll();
    }
    public Optional<User> getOne(int id) {
        return userR.findById(id);
    }
    public void save(User usuario) {
        userR.save(usuario);
    }
    public void delete(int id) {
        userR.deleteById(id);
    }
    public boolean existById(int id) {
        return userR.existsById(id);
    }
}
