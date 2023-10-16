package com.example.msauth.service;

import com.example.msauth.dto.AuthUserDto;
import com.example.msauth.entity.AuthUser;
import com.example.msauth.entity.TokenDto;

public interface AuthUserService {
    public AuthUser save(AuthUserDto authUserDto);
    public TokenDto login(AuthUserDto authUserDto);
    public TokenDto validate(String token);
}
