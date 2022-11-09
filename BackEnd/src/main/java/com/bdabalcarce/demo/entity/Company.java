package com.bdabalcarce.demo.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name="companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Company;
    @NotNull

    @Column(name = "co_cuit")
    private String coCuit;
    @NotNull

    @Column(name = "co_name")
    private String coName;
    @NotNull

    @Column(name = "co_category")
    private String coCategory;
    @NotNull

    @Column(name = "co_email")
    private String coEmail;
    @NotNull

    @Column(name = "co_phone")
    private String coPhone;

    @Column(name = "co_address")
    private String coAdress;

    @Column(name = "co_ContactNm")
    private String coContactNm;

    @Column(name = "co_ContactLn")
    private String coContactLn;
    @JsonIgnore
    @OneToMany(mappedBy = "company", fetch = FetchType.EAGER,cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    private List<Donation> donaciones = new ArrayList<Donation>();
    public Company() {
    }
    public Company(String coCuit, String coName, String coCategory, String coEmail, String coPhone, String coAdress, String coContactNm, String coContactLn) {
        this.coCuit = coCuit;
        this.coName = coName;
        this.coCategory = coCategory;
        this.coEmail = coEmail;
        this.coPhone = coPhone;
        this.coAdress = coAdress;
        this.coContactNm = coContactNm;
        this.coContactLn = coContactLn;
    }
    public int getId_Company() {

        return id_Company;
    }
    public void setId_Company(int id_Company) {

        this.id_Company = id_Company;
    }
    public String getCoName() {

        return coName;
    }
    public void setCoName(String coName) {

        this.coName = coName;
    }
    public String getCoCategory() {

        return coCategory;
    }
    public void setCoCategory(String coCategory) {

        this.coCategory = coCategory;
    }
    public String getCoCuit() {

        return coCuit;
    }
    public void setCoCuit(String coCuit) {

        this.coCuit = coCuit;
    }
    public String getCoEmail() {

        return coEmail;
    }
    public void setCoEmail(String coEmail) {

        this.coEmail = coEmail;
    }
    public String getCoPhone() {

        return coPhone;
    }
    public void setCoPhone(String coPhone) {

        this.coPhone = coPhone;
    }
    public String getCoAdress() {

        return coAdress;
    }
    public void setCoAdress(String coAdress) {

        this.coAdress = coAdress;
    }
    public String getCoContactNm() {

        return coContactNm;
    }
    public void setCoContactNm(String coContactNm) {

        this.coContactNm = coContactNm;
    }
    public String getCoContactLn() {

        return coContactLn;
    }
    public void setCoContactLn(String coContactLn) {

        this.coContactLn = coContactLn;
    }
    public List<Donation> getDonaciones() {

        return donaciones;
    }
    public void setDonaciones(List<Donation> donaciones) {

        this.donaciones = donaciones;
    }
}