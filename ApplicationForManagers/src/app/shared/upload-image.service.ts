import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  progress : number = 0;
  message : string = "";
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

  uploadImage(formData : FormData, pharmacyName: string){
    this.http.post(`http://localhost:44317/uploadImage/${pharmacyName}`, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / 1);
      }
      else if(event.type == HttpEventType.Response) {
        this.message = 'Upload success!';
        this.onUploadFinished.emit(event.body);
      }
    });
  }

}
