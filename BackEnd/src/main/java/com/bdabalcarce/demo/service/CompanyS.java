package com.bdabalcarce.demo.service;
import com.bdabalcarce.demo.entity.Company;
import com.bdabalcarce.demo.repository.CompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class CompanyS {
    @Autowired
    CompanyRepo companyR;
    public List<Company> list() {
        return companyR.findAll();
    }
    public Optional<Company> getOne(int id) {
        return companyR.findById(id);
    }
    public void save(Company comp) {
        companyR.save(comp);
    }
    public void delete(int id) {
        companyR.deleteById(id);
    }
    public boolean existById(int id) {
        return companyR.existsById(id);
    }}

