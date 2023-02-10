import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { file } from '../fileservice';
import { FileserviceService } from '../fileservice.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  value = JSON.parse(localStorage.getItem('google_auth') || '{}');
  name = this.value.name;
  uploaded = false;
  file: any;
  filename: object | undefined;
  email  = this.value.email;
  candidate: file = new file();
  files!: file[];

  constructor(private _http:HttpClient, private fileservice: FileserviceService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.fileservice.getfilesbyemailid(this.email).subscribe(data=>{
      console.log(data)
      this.files=data;
    })
  }

  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
  }

  upload() {
    // this.emp= window.localStorage.getItem("user_name");
    // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();this.uploaded = true;
    // Add file content to prepare the request
    body.append("file", this.file);
    // Launch post request
    this._http.post('http://localhost:8080/upload', body)
    .subscribe(
      // Admire results
      (data) => {this.filename=data;console.log(data)},
      // Or errors :-(
      error => console.log(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
  }

 

  savedetails(){
    this.candidate.emailid = this.email;
    this.fileservice.createCandidate(this.candidate).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
    window.location.reload();
  }

  onClickdownloadfile(fileName: string){
      const downloadLink = document.createElement('a');
      downloadLink.href = fileName;
      // downloadLink.download = "Referral PORTAL.pdf";
      downloadLink.click();
  }
}
