import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  async getFiles() : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.backendUrl + environment.backendFileUrl, {observe: 'response', params: {
        bucketName: environment.bucketName
      }})
      .subscribe(files => {
        resolve(files);
      })
    })
  }

  async uploadFile(file: File) {
    return new Promise((resolve, reject) => {
      let formData: FormData= new FormData();
      formData.append("file", file, file.name);

      let headers = new HttpHeaders();

      headers.append("Content-Type", 'multipart/form-data')

      this.http.post(environment.backendUrl + environment.backendFileUrl, formData, {
        observe: 'response',
        params: {
          bucketName: environment.bucketName
        },
        responseType: 'text'
      })
      .subscribe(response => {
        resolve(response);
        console.log(response);
      })
    })
  }

  async deleteFile(fileName: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.backendUrl + environment.backendFileUrl, {
        observe: 'response',
        params: {
          bucketName: environment.bucketName,
          fileName: fileName
        },
        responseType: 'text'
      })
      .subscribe(response => {
        resolve(response);
        console.log(response);
      })
    })
  }
}
