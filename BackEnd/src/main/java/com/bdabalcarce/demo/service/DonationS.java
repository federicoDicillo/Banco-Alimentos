package com.bdabalcarce.demo.service;
import com.bdabalcarce.demo.entity.Donation;
import com.bdabalcarce.demo.repository.DonationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class DonationS {
    @Autowired
    DonationRepo donationR;
    public List<Donation> list() {
        return donationR.findAll();
    }
    public void save(Donation donacion) {
        donationR.save(donacion);
    }
    public void delete(int id) {
        donationR.deleteById(id);
    }
    public boolean existById(int id) {
        return donationR.existsById(id);
    }

    public List<Donation> getDonationByDonCategory(String donCategory){
      return donationR.findByDonCategory(donCategory);
    }

    public boolean existsByDonCategory(String donCategory){
        return donationR.existsByDonCategory(donCategory);
    }
}

