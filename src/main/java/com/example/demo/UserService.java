package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.LinkedList;

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

@Service  
public class UserService {  
    public static final String COL_NAME = "users";  

    public String saveUserDetails(User user) throws InterruptedException, ExecutionException {  
        Firestore firestore = FirestoreClient.getFirestore();  
        ApiFuture<DocumentReference> collectionsApiFuture = firestore.collection(COL_NAME).add(user);  
        return "Data successfully written"; 
    }  

    public User getUserDetails(String username) throws InterruptedException, ExecutionException {
        Firestore firestore = FirestoreClient.getFirestore();
        CollectionReference users = firestore.collection(COL_NAME);
        Query getUser = users.whereEqualTo("username", username);
        ApiFuture<QuerySnapshot> data = getUser.get();

        if(data.get().getDocuments.size() == 0) return null;

        return data.get().getDocuments().get(0).toObject(User.class);
    }
}  