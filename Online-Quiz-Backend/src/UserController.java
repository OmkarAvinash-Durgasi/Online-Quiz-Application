package com.javaspring.online_quiz_application.controller;

import com.javaspring.online_quiz_application.model.UsersModel;
import com.javaspring.online_quiz_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping( path = "/register")
    public String registerUser(@RequestBody UsersModel usersModel)
    {
        String ID = userService.addUser(usersModel);
        return ID;
    }
}
