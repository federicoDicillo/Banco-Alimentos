package com.bdabalcarce.demo.controller;
import com.bdabalcarce.demo.Dto.CompanyDto;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.Company;
import com.bdabalcarce.demo.service.CompanyS;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController

@CrossOrigin(origins = "http://localhost:3000"})
@RequestMapping({"/companies"})
public class CompanyContr {
    @Autowired
    CompanyS coServ;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/list")
    public ResponseEntity<List<Company>> list() {
        List<Company> list = coServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody CompanyDto coDto) {
        if (StringUtils.isBlank(coDto.getConame()) ||
                StringUtils.isBlank(coDto.getCocategory()) ||
                StringUtils.isBlank(coDto.getCocuit())  ||
                StringUtils.isBlank(coDto.getCoemail())  ||
                StringUtils.isBlank(coDto.getCophone())  ||
                StringUtils.isBlank(coDto.getCoaddress())  ||
                StringUtils.isBlank(coDto.getCocontactNm()) ||
                StringUtils.isBlank(coDto.getCocontactLn())  ){

        /*Si no se ingresan los campos coName, coCategory, coCuit, coEmail, coPhone, coAddress, coContactNm y
        coContactLn, se reportará un BAD_REQUEST en consola con el siguiente msj y la info no se registrará*/

            return new ResponseEntity(new Message("Campos obligatorios: coName, coCategory, coCuit, coEmail, coPhone, coAddress, coContactNm y coContactLn"),
                    HttpStatus.BAD_REQUEST);
        }

        Company empresa = new Company(
                coDto.getConame(),
                coDto.getCocategory(),
                coDto.getCocuit(),
                coDto.getCoemail(),
                coDto.getCophone(),
                coDto.getCoaddress(),
                coDto.getCocontactNm(),
                coDto.getCocontactLn());

        coServ.save(empresa);

        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }


}
