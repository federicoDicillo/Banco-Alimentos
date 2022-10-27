package com.bdabalcarce.demo.Dto;
import javax.validation.constraints.NotBlank;
public class CompanyDto {
    @NotBlank
    private String coname;
    @NotBlank
    private String cocategory;
    @NotBlank
    private String cocuit;
    @NotBlank
    private String coemail;
    @NotBlank
    private String cophone;
    @NotBlank
    private String coaddress;
    @NotBlank
    private String cocontactNm;
    @NotBlank
    private String cocontactLn;
    public CompanyDto() {
    }
    public CompanyDto(String coname, String cocategory, String cocuit, String coemail, String cophone, String coaddress, String cocontactNm, String cocontactLn) {
        this.coname = coname;
        this.cocategory = cocategory;
        this.cocuit = cocuit;
        this.coemail = coemail;
        this.cophone = cophone;
        this.coaddress = coaddress;
        this.cocontactNm = cocontactNm;
        this.cocontactLn = cocontactLn;
    }

    public String getConame() {
        return coname;
    }

    public void setConame(String coname) {
        this.coname = coname;
    }

    public String getCocategory() {
        return cocategory;
    }

    public void setCocategory(String cocategory) {
        this.cocategory = cocategory;
    }

    public String getCocuit() {
        return cocuit;
    }

    public void setCocuit(String cocuit) {
        this.cocuit = cocuit;
    }

    public String getCoemail() {
        return coemail;
    }

    public void setCoemail(String coemail) {
        this.coemail = coemail;
    }

    public String getCophone() {
        return cophone;
    }

    public void setCophone(String cophone) {
        this.cophone = cophone;
    }

    public String getCoaddress() {
        return coaddress;
    }

    public void setCoaddress(String coaddress) {
        this.coaddress = coaddress;
    }

    public String getCocontactNm() {
        return cocontactNm;
    }

    public void setCocontactNm(String cocontactNm) {
        this.cocontactNm = cocontactNm;
    }

    public String getCocontactLn() {
        return cocontactLn;
    }

    public void setCocontactLn(String cocontactLn) {
        this.cocontactLn = cocontactLn;
    }
}