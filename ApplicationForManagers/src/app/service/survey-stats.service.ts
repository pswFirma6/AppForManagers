import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalSettings } from '../global';
import { SurveyQuestion } from '../shared/survey-stats.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
    
    surveyUrl = GlobalSettings.baseUrl + "/api/survey";

    constructor(private http: HttpClient) { }

    getMethod(): Observable<SurveyQuestion[]> {      
        return this.http.get<SurveyQuestion[]>(this.surveyUrl)
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