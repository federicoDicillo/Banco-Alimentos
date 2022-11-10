package com.bdabalcarce.demo.controller;
import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.Dto.DonationDto;
import com.bdabalcarce.demo.Dto.UserDto;
import com.bdabalcarce.demo.entity.Company;
import com.bdabalcarce.demo.entity.Donation;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.User;
import com.bdabalcarce.demo.service.DonationS;
import com.bdabalcarce.demo.service.UserS;
import net.bytebuddy.pool.TypePool;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping({"/donations"})
public class DonationContr {
    @Autowired
    DonationS donationS;
    @Autowired
    UserS userS;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/list")
    public ResponseEntity<List<Donation>> list() {
        List<Donation> list = donationS.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/search/{donCategory}")
    public ResponseEntity<List<Donation>> getDonationByCategory(@PathVariable String donCategory) {
        if (!donationS.existsByDonCategory(donCategory)) {
            return new ResponseEntity(new Message("No se encontraron donaciones dentro de esa categoría"), HttpStatus.NOT_FOUND);
        }
        List<Donation> list = donationS.getDonationByDonCategory(donCategory);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/search/between/{startDate}&{endDate}")
    public ResponseEntity<List<Donation>> getDonationByDateBetween(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                                                   @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        List<Donation> list = donationS.getDonationByDonDateBetween(startDate, endDate);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/search/date/{donDate}")
    public ResponseEntity<List<Donation>> getDonationByDate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate donDate) {
        //Con el DateTimeFormat.iso.date se le da el formato de fecha para recibir por pathvariable YYYY-MM-DD
        if (!donationS.existsByDonDate(donDate)) {
            return new ResponseEntity(new Message("No se encontraron donaciones en esa fecha"), HttpStatus.NOT_FOUND);
        }
        List<Donation> list = donationS.getDonationByDonDate(donDate);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DonationDto dtoDonation) {

        UserDto userdto = dtoDonation.getUser();
        CompanyDto companyDto = dtoDonation.getCompany();
        User user = null;
        Company company = null;
        // Si se detectan datos en user, se generará un objeto, y se asociará con su donation.
        if (userdto != null) {
            user = new User(
                    userdto.getUserdni(),
                    userdto.getUsername(),
                    userdto.getUserlastname(),
                    userdto.getUseremail(),
                    userdto.getUserphone(),
                    userdto.getUseravailability(),
                    userdto.getUservehicle());

            // Si se detectan datos en company, se generará un objeto de su clase, y se asociará con su donation.
        } else {
            company = new Company(
                    companyDto.getCocuit(),
                    companyDto.getConame(),
                    companyDto.getCocategory(),
                    companyDto.getCoemail(),
                    companyDto.getCophone(),
                    companyDto.getCoaddress(),
                    companyDto.getCocontactNm(),
                    companyDto.getCocontactLn());
        }
        Donation donacion = new Donation(
                dtoDonation.getDoncategory(),
                dtoDonation.getDonperishable(),
                dtoDonation.getDonexpiration(),
                dtoDonation.getDondetails(),
                user,
                company
        );
        donationS.save(donacion);
        return new ResponseEntity(new Message("Información guardada"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id_donation) {
        //valida si existe el id
        if (!donationS.existById(id_donation)) {
            return new ResponseEntity(new Message("El ID no Existe"), HttpStatus.BAD_REQUEST);
        }

        donationS.delete(id_donation);
        return new ResponseEntity(new Message("Donación eliminada"), HttpStatus.OK);
    }


    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody DonationDto dtoDonation) {
        //valida si existe el id
        if (!donationS.existById(id)) {
            return new ResponseEntity(new Message("El ID no Existe"), HttpStatus.BAD_REQUEST);
        }

            Donation donacion = donationS.getOne(id).get();
            donacion.setDonCategory(dtoDonation.getDoncategory());
            donacion.setDonPerishable(dtoDonation.getDonperishable());
            donacion.setDonExpiration(dtoDonation.getDonexpiration());
            donacion.setDonDetails(dtoDonation.getDondetails());

        donationS.save(donacion);
        return new ResponseEntity(new Message("Donacion actualizado"), HttpStatus.OK);
    }

}
