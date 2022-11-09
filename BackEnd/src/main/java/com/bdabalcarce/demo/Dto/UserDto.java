package com.bdabalcarce.demo.Dto;
import com.bdabalcarce.demo.entity.Donation;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
public class UserDto {
    private  String userrol;
    @NotBlank
    private String username;
    @NotBlank
    private String userlastname;
    @NotBlank
    private String userdni;
    private String useremail;
    private String userphone;
    private String uservehicle;
    private String useravailability;
    private List<Donation> donaciones = new ArrayList<Donation>();
    public UserDto() {
    }
    public UserDto(String userdni, String userrol, String username, String userlastname,  String useremail, String userphone, String uservehicle, String useravailability) {
        this.userdni = userdni;
        this.userrol = userrol;
        this.username = username;
        this.userlastname = userlastname;
        this.useremail = useremail;
        this.userphone = userphone;
        this.uservehicle = uservehicle;
        this.useravailability = useravailability;
    }

    public String getUserrol() {
        return userrol;
    }

    public void setUserrol(String userrol) {
        this.userrol = userrol;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserlastname() {
        return userlastname;
    }

    public void setUserlastname(String userlastname) {
        this.userlastname = userlastname;
    }

    public String getUserdni() {
        return userdni;
    }

    public void setUserdni(String userdni) {
        this.userdni = userdni;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUserphone() {
        return userphone;
    }

    public void setUserphone(String userphone) {
        this.userphone = userphone;
    }

    public String getUservehicle() {
        return uservehicle;
    }

    public void setUservehicle(String uservehicle) {
        this.uservehicle = uservehicle;
    }

    public String getUseravailability() {
        return useravailability;
    }

    public void setUseravailability(String useravailability) {
        this.useravailability = useravailability;
    }

    public List<Donation> getDonaciones() {

        return donaciones;
    }
    public void setDonaciones(List<Donation> donaciones) {

        this.donaciones = donaciones;
    }
}