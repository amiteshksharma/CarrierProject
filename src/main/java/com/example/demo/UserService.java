package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.LinkedList;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.WriteResult;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.api.core.ApiFuture;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.lang.InterruptedException;
import java.util.concurrent.ExecutionException;

import java.net.URL;
import java.net.HttpURLConnection;

@Service  
public class UserService {  
    public static final String COL_NAME = "users"; 
    public static final String API_KEY = "AIzaSyCb2k9JJNEpB2R0nUMR3aeU1qUKvdIB83s";

    /**
    * Saves the user details in the Firestore database
    *
    * user - object representing the user's information
    * 
    */
    public String saveUserDetails(User user) throws InterruptedException, ExecutionException {  
        Firestore firestore = FirestoreClient.getFirestore();  
        ApiFuture<DocumentReference> collectionsApiFuture = firestore.collection(COL_NAME).add(user);  
        return "Data successfully written"; 
    }  

    /**
    * A method used for either authenticating a user or registering a user. 
    * Takes in a urlStr that is used for the REST API call
    *
    * user - object representing the user's information
    * urlStr - a String that is the REST API url to call
    */
    public int userRegisterOrLogin(String user, String urlStr) throws Exception {
        URL url = new URL (urlStr+API_KEY);
        //Open a connection to the url
        HttpURLConnection con = (HttpURLConnection) url.openConnection();    
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json; utf-8");
        con.setRequestProperty("Accept", "application/json");
        con.setDoOutput(true);

        try(OutputStream os = con.getOutputStream()) {
            byte[] input = user.getBytes("utf-8");
            os.write(input, 0, input.length);			
        }

        try(BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"))) {
            StringBuilder response = new StringBuilder();
            String responseLine = null;

            while ((responseLine = br.readLine()) != null) {
                response.append(responseLine.trim());
            }

            System.out.println(response.toString());
            return 0;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    /**
    * Get the user's details. Takes in a string that contains the user's username or email.
    * Can be used to find user information with either email or username 
    *
    * username - the username of the user to look up
    * type - String that is defined as either username or email
    * 
    */
    public User getUserDetails(String username, String type) throws InterruptedException, ExecutionException {
        Firestore firestore = FirestoreClient.getFirestore();
        CollectionReference users = firestore.collection(COL_NAME);
        Query getUser = users.whereEqualTo(type, username);;
        switch(type) {
            case "username": 
                getUser = users.whereEqualTo(type, username);
            case "email":
                getUser = users.whereEqualTo(type, username);
        }

        ApiFuture<QuerySnapshot> data = getUser.get();

        if(data.get().getDocuments().size() == 0) return null;

        return data.get().getDocuments().get(0).toObject(User.class);
    }

    //deleteAccount
    //changeUserLabel
    public int updateUserLabel(String username, String label) throws InterruptedException, ExecutionException {
        Firestore firestore = FirestoreClient.getFirestore();
        String getUid = this.getUserDocument(username);
        DocumentReference users = firestore.collection(COL_NAME).document(getUid);
        ApiFuture<WriteResult> future = users.update("label", label);
        return 0;
    }

    public String getUserDocument(String username) throws InterruptedException, ExecutionException {
        Firestore firestore = FirestoreClient.getFirestore();
        CollectionReference users = firestore.collection(COL_NAME);  
        Query getUser = users.whereEqualTo("username", username); 
        ApiFuture<QuerySnapshot> data = getUser.get();
        return data.get().getDocuments().get(0).getId();
    }
    //updateUsername
    //resetPassword
    //addPaymentDetails
    //removePaymentDetails
}  