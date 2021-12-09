import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalSettings } from '../global';
import { Patients } from 'src/app/shared/patients';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
    
    feedbackUrl = GlobalSettings.baseUrl + "/api/Patient";

    constructor(private http: HttpClient) { }

    getMethod(): Observable<Patients[]> {      
        return this.http.get<Patients[]>(this.feedbackUrl)
          .pipe(
            catchError(this.handleError)
          );
      }

    handleError(error: any) {

      let errorMessage = '';
    
      if (error.error instanceof ErrorEvent) {
    
        // client-side error
      
        errorMessage = `Error: ${error.error.message} `;
    
      } else {
    
        // server-side error
    
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    
      }
    
      window.alert(errorMessage);
    
      return throwError(errorMessage);
    
    }
}