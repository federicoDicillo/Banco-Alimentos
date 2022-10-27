package com.bdabalcarce.demo.Dto;
import javax.validation.constraints.NotBlank;

public class OngDto {
    @NotBlank
    private String ongname;
    @NotBlank
    private String ongcuit;
    @NotBlank
    private String ongreason;
    @NotBlank
    private String ongheadnm;
    @NotBlank
    private String ongheadln;
    @NotBlank
    private String ongaddress;
    private String ongphone;
    private String ongemail;
    public OngDto() {
    }

    public OngDto(String ongname, String ongcuit, String ongreason, String ongheadnm, String ongheadln, String ongaddress, String ongphone, String ongemail) {
        this.ongname = ongname;
        this.ongcuit = ongcuit;
        this.ongreason = ongreason;
        this.ongheadnm = ongheadnm;
        this.ongheadln = ongheadln;
        this.ongaddress = ongaddress;
        this.ongphone = ongphone;
        this.ongemail = ongemail;
    }

    public String getOngname() {
        return ongname;
    }

    public void setOngname(String ongname) {
        this.ongname = ongname;
    }

    public String getOngcuit() {
        return ongcuit;
    }

    public void setOngcuit(String ongcuit) {
        this.ongcuit = ongcuit;
    }

    public String getOngreason() {
        return ongreason;
    }

    public void setOngreason(String ongreason) {
        this.ongreason = ongreason;
    }

    public String getOngheadnm() {
        return ongheadnm;
    }

    public void setOngheadnm(String ongheadnm) {
        this.ongheadnm = ongheadnm;
    }

    public String getOngheadln() {
        return ongheadln;
    }

    public void setOngheadln(String ongheadln) {
        this.ongheadln = ongheadln;
    }

    public String getOngaddress() {
        return ongaddress;
    }

    public void setOngaddress(String ongaddress) {
        this.ongaddress = ongaddress;
    }

    public String getOngphone() {
        return ongphone;
    }

    public void setOngphone(String ongphone) {
        this.ongphone = ongphone;
    }

    public String getOngemail() {
        return ongemail;
    }

    public void setOngemail(String ongemail) {
        this.ongemail = ongemail;
    }
}

