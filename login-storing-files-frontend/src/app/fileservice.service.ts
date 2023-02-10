import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { file } from './fileservice';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {
  private baseUrl = 'http://localhost:8080/uploaddetails';
  constructor(private http: HttpClient) { }

  getreallfiles():Observable <any>
  {
    return this.http.get('http://localhost:8080/filelist')
  }

  createCandidate(candidate: file) {
    console.log(candidate);
    let FileDb = candidate;
    return this.http.post(`${this.baseUrl}`,FileDb)
  }

  uploadfile(file: File) {
    return this.http.post('http://localhost:8080/upload',file)
  }

  getfilesbyemailid(emailid: string):Observable <any>{
    return this.http.get(`http://localhost:8080/filebyemail?emailid=${emailid}`)
  }
}
