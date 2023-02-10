package com.example.demo.controller;


import com.example.demo.model.FileDb;
import com.example.demo.service.FileDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
public class FileDbController {
	
	@Autowired
	private FileDbService fileDbService;

	@PostMapping("/uploaddetails")
	public FileDb uploadFile(@RequestBody FileDb fileDb) throws IOException {
		return fileDbService.store(fileDb);
	}

	@GetMapping("/filebyemail")
	public List<FileDb> filebyemail(@RequestParam String emailid){
		return fileDbService.getFilebyemail(emailid);
	}

	@GetMapping("/filelist")
	public List<FileDb> getFileList(){
		return fileDbService.getFileList();
	}

}