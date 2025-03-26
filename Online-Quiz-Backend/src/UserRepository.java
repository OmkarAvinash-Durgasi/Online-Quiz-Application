package com.javaspring.online_quiz_application.repository;

import com.javaspring.online_quiz_application.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository

public interface UserRepository extends JpaRepository<Users, Integer> {           //get the Users from Entity

}
