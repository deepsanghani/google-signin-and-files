package com.example.demo.service;


import com.example.demo.controller.FileController;
import com.example.demo.model.FileDb;
import com.example.demo.repository.FileDbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class FileDbService {

	@Autowired
	private FileDbRepository fileDbRepository;
	private FileController fileController;
	
	public FileDb store(FileDb fileDb) throws IOException {
		FileDb fileDb1 = new FileDb();
		fileDb1.setId(fileDb.getId());
		fileDb1.setEmailid(fileDb.getEmailid());
		fileDb1.setFileid(FileController.getfilename());
		fileDb1.setFilename(FileController.ogfilename());
		return fileDbRepository.save(fileDb1);
	}

	public List<FileDb> getFilebyemail(String emailid){
		return fileDbRepository.userbookings(emailid);
	}

	public List<FileDb> getFileList(){
		return fileDbRepository.findAll();
	}
}