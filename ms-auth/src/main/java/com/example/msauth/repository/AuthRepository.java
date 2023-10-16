package com.example.msauth.repository;

import com.example.msauth.entity.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<AuthUser,Integer> {
    Optional<AuthUser> findByUserName(String userName);
}
