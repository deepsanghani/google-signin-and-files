package com.example.demo.model;


import com.example.demo.controller.FileController;

import javax.persistence.*;

@Entity
@Table(name ="details")
public class FileDb {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "emailid")
	private String emailid;

	@Column(name = "filename")
	private String filename;

	@Column(name = "fileid")
	private String fileid;


	public FileDb() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getFileid() {
		return fileid;
	}

	public void setFileid(String fileid) {
		this.fileid = FileController.getfilename();
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = FileController.ogfilename();
	}

	@Override
	public String toString() {
		return "FileDb{" +
				"id=" + id +
				", emailid='" + emailid + '\'' +
				", filename='" + filename + '\'' +
				", fileid='" + fileid + '\'' +
				'}';
	}
}
