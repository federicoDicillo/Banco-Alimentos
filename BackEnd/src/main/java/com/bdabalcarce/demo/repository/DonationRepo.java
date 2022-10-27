package com.bdabalcarce.demo.repository;
import com.bdabalcarce.demo.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonationRepo extends JpaRepository<Donation, Integer> {

    public List<Donation> findByDonCategory(String donCategory);

    boolean existsByDonCategory(String donCategory);
}