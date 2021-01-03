package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;

import java.lang.InterruptedException;
import java.util.concurrent.ExecutionException;

@RestController
public class UserController {
    @Autowired  
    UserService userService;  

    @PostMapping("/user/create")
    public int createUser(@RequestBody User user) throws InterruptedException, ExecutionException {
        try {
            userService.saveUserDetails(user);
            return 0;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    @PostMapping("/user/register")
    public int createUserAuth(@RequestBody String user) throws Exception {
        String url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        
        try {
            userService.userRegisterOrLogin(user, url);
            return 0;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    @PostMapping("/user/login")
    public int loginUserAuth(@RequestBody String user) throws Exception {
        String url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        
        try {
            userService.userRegisterOrLogin(user, url);
            return 0;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    @PostMapping("/user/retrieve")
    public User getUserInformation(@RequestBody String username) throws InterruptedException, ExecutionException {
        try {
            User details = userService.getUserDetails(username, "username");
            return details;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("/user/update/label")
    public int updateUserLabelProfile(@RequestBody User user) throws InterruptedException, ExecutionException {
        try {
            int check = userService.updateUserLabel(user.username, user.label);
            return check;
        } catch (Exception e) {
            e.printStackTrace();
            return 10;
        }
    }
}