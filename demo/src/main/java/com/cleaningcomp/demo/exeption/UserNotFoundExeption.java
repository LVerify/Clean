package com.cleaningcomp.demo.exeption;

public class UserNotFoundExeption extends RuntimeException{
    public UserNotFoundExeption(Long id){
        super("Could not found the user with id" + id);
    }
}
