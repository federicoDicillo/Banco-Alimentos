package com.bdabalcarce.demo.Dto;
import javax.validation.constraints.NotBlank;
import java.util.Date;
public class DonationDto {
    @NotBlank
    private String doncategory;

    private Boolean donperishable;
    private Date donexpiration;
    private String dondetails;
    private UserDto user;

    private CompanyDto company;
    public DonationDto() {
    }
    public DonationDto(String doncategory, Boolean donperishable, Date donexpiration, String dondetails, UserDto user, CompanyDto company) {
        this.doncategory = doncategory;
        this.donperishable = donperishable;
        this.donexpiration = donexpiration;
        this.dondetails = dondetails;
        this.user= user;
        this.company = company;
    }
    public DonationDto(String donCategory, Boolean donPerishable, Date donExpiration, String donDetails) {
    }

    public String getDoncategory() {
        return doncategory;
    }

    public void setDoncategory(String doncategory) {
        this.doncategory = doncategory;
    }

    public Boolean getDonperishable() {
        return donperishable;
    }

    public void setDonperishable(Boolean donperishable) {
        this.donperishable = donperishable;
    }

    public Date getDonexpiration() {
        return donexpiration;
    }

    public void setDonexpiration(Date donexpiration) {
        this.donexpiration = donexpiration;
    }

    public String getDondetails() {
        return dondetails;
    }

    public void setDondetails(String dondetails) {
        this.dondetails = dondetails;
    }

    public UserDto getUser() {

        return user;
    }
    public void setUser(UserDto user) {

        this.user = user;
    }

    public CompanyDto getCompany() {

        return company;
    }
    public void setCompany(CompanyDto company) {

        this.company = company;
    }
}

