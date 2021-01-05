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
    public String createUserAuth(@RequestBody String user) throws Exception {
        String url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        
        try {
            System.out.println(user);
            String details = userService.userRegisterOrLogin(user, url);
            return details;
        } catch (Exception e) {
            e.printStackTrace();
            return "1";
        }
    }

    @PostMapping("/user/login")
    public String loginUserAuth(@RequestBody String user) throws Exception {
        String url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        
        try {
            String details = userService.userRegisterOrLogin(user, url);
            return details;
        } catch (Exception e) {
            e.printStackTrace();
            return "1";
        }
    }

    @PostMapping("/user/retrieve")
    public User getUserInformation(@RequestBody String username) throws InterruptedException, ExecutionException {
        try {
            User details = userService.getUserDetails(username, "username");
            return details;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PostMapping("/user/account/label")
    public int updateUserLabelProfile(@RequestBody User user) throws InterruptedException, ExecutionException {
        try {
            String username = user.getUsername();
            String label = user.getLabel();
            int check = userService.updateUserLabel(username, label);
            return check;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    @PostMapping("/user/account/delete")
    public int deleteUserAccount(@RequestBody String user) throws InterruptedException, ExecutionException {
        String url = "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=";
        
        try {
            // int deleteFirestore = userService.deleteUserAccount(username);
            int deleteAuth = userService.deleteUserAccountAuth(user, url);
            return 0;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }

    @PostMapping("/user/account/remove")
    public int deleteUserAccount(@RequestBody String user) throws InterruptedException, ExecutionException {
        try {
            int deleteFirestore = userService.deleteUserAccount(user);
            return 0;
        } catch (Exception e) {
            e.printStackTrace();
            return 1;
        }
    }
}