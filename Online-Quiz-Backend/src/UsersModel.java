package com.javaspring.online_quiz_application.model;

public class UsersModel {

    private int userid;
    private String username;
    private String email;
    private String contactNumber;
    private String password;

    public UsersModel(int userid, String username, String email, String contactNumber, String password) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.contactNumber = contactNumber;
        this.password = password;
    }

    public UsersModel() {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UsersModel{" +
                "userid=" + userid +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
