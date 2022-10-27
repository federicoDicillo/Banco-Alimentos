package com.bdabalcarce.demo.repository;
import com.bdabalcarce.demo.entity.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
public interface OngRepo extends JpaRepository<Ong, Integer> {
}
