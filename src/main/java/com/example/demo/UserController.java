package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import java.lang.InterruptedException;
import java.util.concurrent.ExecutionException;

@RestController
public class UserController {
    @Autowired  
    UserService userService;  

    @GetMapping("/user")
    public String dadJokes() throws InterruptedException, ExecutionException {
        userService.saveUserDetails();
        return "test database";
    }
}