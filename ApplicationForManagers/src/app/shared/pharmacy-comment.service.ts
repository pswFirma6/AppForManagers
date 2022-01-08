import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PharmacyComment } from './pharmacy-comment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyCommentService {

  baseUrl: string = "http://localhost:44317/addComment";

  constructor(private http: HttpClient) { }

  getPharmacyComments(pharmacyName: string): Observable<PharmacyComment[]> {
    let headers = new HttpHeaders();
        headers  = headers.append('responseType', 'json');
        return this.http.get<PharmacyComment[]>(`http://localhost:44317/comments/${pharmacyName}`, {headers: headers});
  }

  addPharmacyComment(comment: PharmacyComment) {
    return this.http.post(this.baseUrl, comment);
  }

}
