package com.bdabalcarce.demo.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table (name="users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_user;
    @NotNull

    @Column(name = "user_dni")
    private String userDni;

    @Column(name = "user_rol")
    private String userRol;
    @NotNull

    @Column(name = "user_name")
    private String userName;
    @NotNull

    @Column(name = "user_lastname")
    private String userLastname;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_phone")
    private String userPhone;

    @Column(name = "user_vehicle")
    private String userVehicle;

    @Column(name = "user_availability")
    private String userAvailability;
    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER,cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    private List<Donation> donaciones = new ArrayList<Donation>();
    public User() {
    }
    public User(String userDni, String userRol, String userName, String userLastname, String userEmail, String userPhone, String userVehicle, String userAvailability) {
        this.userDni = userDni;
        this.userRol = userRol;
        this.userName = userName;
        this.userLastname = userLastname;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userVehicle = userVehicle;
        this.userAvailability = userAvailability;
    }

    public User(String userDni, String userName, String userLastname, String userEmail, String userPhone, String userVehicle, String userAvailability) {
        this.userDni = userDni;
        this.userName = userName;
        this.userLastname = userLastname;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userVehicle = userVehicle;
        this.userAvailability = userAvailability;
    }

    public int getId_user() {
        return id_user;
    }
    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
    public String getUserDni() {
        return userDni;
    }
    public void setUserDni(String userDni) {
        this.userDni = userDni;
    }
    public String getUserRol() {
        return userRol;
    }
    public void setUserRol(String userRol) {
        this.userRol = userRol;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getUserLastname() {
        return userLastname;
    }
    public void setUserLastname(String userLastname) {
        this.userLastname = userLastname;
    }
    public String getUserEmail() {
        return userEmail;
    }
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public String getUserPhone() {
        return userPhone;
    }
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }
    public String getUserVehicle() {
        return userVehicle;
    }
    public void setUserVehicle(String userVehicle) {
        this.userVehicle = userVehicle;
    }

    public String getUserAvailability() {
        return userAvailability;
    }

    public void setUserAvailability(String userAvailability) {
        this.userAvailability = userAvailability;
    }

    public List<Donation> getDonaciones() {
        return donaciones;
    }
    public void setDonaciones(List<Donation> donaciones) {
        this.donaciones = donaciones;
    }
}

