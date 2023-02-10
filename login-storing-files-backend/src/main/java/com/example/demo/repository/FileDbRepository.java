package com.example.demo.repository;

import com.example.demo.model.FileDb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileDbRepository extends JpaRepository<FileDb, Integer> {
    @Query(value = "SELECT * FROM  details u WHERE u.emailid = :emailid", nativeQuery = true)
    List<FileDb> userbookings(String emailid);
}
