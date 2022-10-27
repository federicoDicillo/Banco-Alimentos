package com.bdabalcarce.demo.repository;
import com.bdabalcarce.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepo extends JpaRepository <User, Integer> {
}
