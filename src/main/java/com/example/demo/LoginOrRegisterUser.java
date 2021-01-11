package com.example.demo;

/**
 * The LoginUser interface that defines the attributes
 * of a common user login.
 *
 */
public class LoginOrRegisterUser {  
    private String email;
    private String password;
    private boolean returnSecureToken;

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isReturnSecureToken() {
		return this.returnSecureToken;
	}

	public void setReturnSecureToken(boolean returnSecureToken) {
		this.returnSecureToken = returnSecureToken;
	}

}