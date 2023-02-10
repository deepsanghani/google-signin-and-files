package com.example.demo.service;


import com.example.demo.model.FileuploadDB;
import com.example.demo.repository.FileuploadDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

@Service
public class FileStorageService {

  @Autowired
  private FileuploadDBRepository fileDBRepository;

  public FileuploadDB store(MultipartFile file) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    FileuploadDB FileDB = new FileuploadDB(fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(FileDB);
  }

  public FileuploadDB getFile(String id) {
    return fileDBRepository.findById(id).get();
  }
  
  public Stream<FileuploadDB> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }

  public FileuploadDB getReferal(String referId) throws Exception {
    return fileDBRepository.findById(referId).orElseThrow(
            () -> new Exception("File not found with Id: " + referId));
  }

}
