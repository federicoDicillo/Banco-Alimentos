package com.bdabalcarce.demo.controller;
import com.bdabalcarce.demo.Dto.DonationDto;
import com.bdabalcarce.demo.Dto.OngDto;
import com.bdabalcarce.demo.entity.Donation;
import com.bdabalcarce.demo.entity.Message;
import com.bdabalcarce.demo.entity.Ong;
import com.bdabalcarce.demo.service.OngS;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping({"/ongs"})
public class OngContr {
    @Autowired
    OngS ongServ;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/list")
    public ResponseEntity<List<Ong>> list() {
        List<Ong> list = ongServ.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody OngDto ongDto) {
        if (StringUtils.isBlank(ongDto.getOngname()) ||
                StringUtils.isBlank(ongDto.getOngcuit()) ||
                StringUtils.isBlank(ongDto.getOngreason())  ||
                StringUtils.isBlank(ongDto.getOngheadnm()) ||
                StringUtils.isBlank(ongDto.getOngheadln()) ||
                StringUtils.isBlank(ongDto.getOngaddress()) ){
    /*Si no se ingresan los campos ongName, ongCuit, ongReason, ongHeadNm, ongHeadLn y ongAddress,
     se reportará un BAD_REQUEST en consola con el siguiente msj y la info no se registrará*/
            return new ResponseEntity(new Message("Campos obligatorios: ongName, ongCuit, ongReason, ongHeadNm, ongHeadLn y ongAddress"),
                    HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(ongDto.getOngphone()) &&
                StringUtils.isBlank(ongDto.getOngemail()) ){
            return new ResponseEntity(new Message("Ingrese al menos uno de los dos campos: ongPhone o ongEmail"),
                    HttpStatus.BAD_REQUEST);
        }
        Ong ong = new Ong(
                ongDto.getOngname(),
                ongDto.getOngcuit(),
                ongDto.getOngreason(),
                ongDto.getOngheadnm(),
                ongDto.getOngheadln(),
                ongDto.getOngaddress(),
                ongDto.getOngphone(),
                ongDto.getOngemail());
        ongServ.save(ong);

        return new ResponseEntity(new Message("Información guardada"),HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id_ong) {
        //valida si existe el id
        if (!ongServ.existById(id_ong)) {
            return new ResponseEntity(new Message("El ID no Existe"), HttpStatus.BAD_REQUEST);
        }

        ongServ.delete(id_ong);

        return new ResponseEntity(new Message("Ong eliminada"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody OngDto ongDto) {
        //valida si existe el id
        if (!ongServ.existById(id)) {
            return new ResponseEntity(new Message("El ID no Existe"), HttpStatus.BAD_REQUEST);
        }

        Ong ong = ongServ.getOne(id).get();
        ong.setOngName(ongDto.getOngname());
        ong.setOngCuit(ongDto.getOngcuit());
        ong.setOngReason(ongDto.getOngreason());
        ong.setOngHeadNm(ongDto.getOngheadnm());
        ong.setOngHeadLn(ongDto.getOngheadln());
        ong.setOngAddress(ongDto.getOngaddress());
        ong.setOngPhone(ongDto.getOngphone());
        ong.setOngEmail(ongDto.getOngemail());

        ongServ.save(ong);
        return new ResponseEntity(new Message("Donacion actualizado"), HttpStatus.OK);
    }

}
