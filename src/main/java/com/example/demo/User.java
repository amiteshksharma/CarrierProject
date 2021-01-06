package com.example.demo;
import java.util.Date;

/**
 * The User interface that defines the attributes
 * of a common user. Key note is the label.
 *
 * label - refers to "admin", "driver", or "user". Helps to organize users.
 * Distinct usernames for each user. 
 * Must be at least 18 years of age.
 * Address must be real and not random letters/numbers
 */
public class User {  
    private String name;
	private String gender;
    private String username;
	private String email;
	private String password;
    private String label;
    private int age;
    private String address;
    private String city;
    private String state;
    private String zipCode;

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLabel() {
		return this.label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return this.zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

}  