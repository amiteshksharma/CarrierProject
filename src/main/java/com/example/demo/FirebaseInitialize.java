package com.example.demo;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.IOException;
import java.util.File;

import javax.annotation.PostConstruct;
import org.springframework.stereotype.Service;

@Service
public class FirebaseInitialize {
    @PostConstruct
     public void initialize() {  
        try {
            InputStream serviceAccount = new FileInputStream("C:/Users/spain/Desktop/VSCode/Carrier/src/main/java/com/example/demo/ServiceAccount/carrier_key.json"));
            GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
            FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(credentials)
                .build();
            //Initialize the firebase app    
            FirebaseApp.initializeApp(options);
            
            //Initialize the firestore database
            Firestore dbFirestore = FirestoreClient.getFirestore();  
        } catch(Exception e) {
            e.printStackTrace();
        }
    }  
}