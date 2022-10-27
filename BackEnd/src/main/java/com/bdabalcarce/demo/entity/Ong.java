package com.bdabalcarce.demo.entity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Entity
@Table(name = "ongs")
public class Ong {
    @Id
    @NotNull

    @Column (name = "ong_cuit")
    private String ongCuit;
    @NotNull

    @Column (name = "ong_name")
    private String ongName;
    @NotNull

    @Column (name = "ong_reason")
    private String ongReason;
    @NotNull

    @Column (name = "ong_headNm")
    private String ongHeadNm;
    @NotNull

    @Column (name = "ong_headLn")
    private String ongHeadLn;

    @Column (name = "ong_address")
    private String ongAddress;

    @Column (name = "ong_phone")
    private String ongPhone;

    @Column (name = "ong_email")
    private String ongEmail;
        public Ong() {
        }
        public Ong (String ongName, String ongCuit, String ongReason, String ongHeadNm, String ongHeadLn, String ongAddress, String ongPhone, String ongEmail) {
            this.ongName = ongName;
            this.ongCuit = ongCuit;
            this.ongReason = ongReason;
            this.ongHeadNm = ongHeadNm;
            this.ongHeadLn = ongHeadLn;
            this.ongAddress = ongAddress;
            this.ongPhone = ongPhone;
            this.ongEmail = ongEmail;
        }
        public String getOngName() {
            return ongName;
        }
        public void setOngName(String ongName) {
            this.ongName = ongName;
        }
        public String getOngCuit() {
            return ongCuit;
        }
        public void setOngCuit(String ongCuit) {
            this.ongCuit = ongCuit;
        }
        public String getOngReason() {
            return ongReason;
        }
        public void setOngReason(String ongReason) {
            this.ongReason = ongReason;
        }
        public String getOngHeadNm() {
            return ongHeadNm;
        }
        public void setOngHeadNm(String ongHeadNm) {
            this.ongHeadNm = ongHeadNm;
        }
        public String getOngHeadLn() {
            return ongHeadLn;
        }
        public void setOngHeadLn(String ongHeadLn) {
            this.ongHeadLn = ongHeadLn;
        }
        public String getOngAddress() {
            return ongAddress;
        }
        public void setOngAddress(String ongAddress) {
            this.ongAddress = ongAddress;
        }
        public String getOngPhone() {
            return ongPhone;
        }
        public void setOngPhone(String ongPhone) {
            this.ongPhone = ongPhone;
        }
        public String getOngEmail() {
            return ongEmail;
        }
        public void setOngEmail(String ongEmail) {
            this.ongEmail = ongEmail;
        }
    }

