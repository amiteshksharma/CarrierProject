package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.HashMap;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.WriteResult;
import com.google.api.core.ApiFuture;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.lang.InterruptedException;
import java.util.concurrent.ExecutionException;

@Service  
public class UserService {  
    public static final String COL_NAME="users";  

    public String saveUserDetails() throws InterruptedException, ExecutionException {  
        Firestore firestore = FirestoreClient.getFirestore();  
        HashMap<String, Integer> map = new HashMap<>();
        map.put("test", 123);
        ApiFuture<WriteResult> collectionsApiFuture = firestore.collection(COL_NAME).document("hello").set(map);  
        return collectionsApiFuture.get().getUpdateTime().toString();  
    }  
}  