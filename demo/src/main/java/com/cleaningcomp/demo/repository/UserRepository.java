package com.cleaningcomp.demo.repository;

import com.cleaningcomp.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
