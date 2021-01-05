package com.example.demo;

/**
 * The DeleteUser interface that defines the attributes
 * of the current user who is going to be deleted
 *
 * username - refers to the current user's username
 * tokenId - the token for the user
 */
public class DeleteUser {  
    private String username;
    private String tokenId;

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTokenId() {
		return this.tokenId;
	}

	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}


}