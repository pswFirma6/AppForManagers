import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalSettings } from '../global';
import { SurveryCategoryDTO, SurveyQuestion, SurveyQuestionRate } from '../shared/survey-stats.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  surveyUrl = GlobalSettings.baseUrl + "/api/Survey";

  constructor(private http: HttpClient) { }

  getMethod(): Observable<any[]> {
    return this.http.get<SurveyQuestion[]>(this.surveyUrl + "/GetAllSurveys")
      .pipe(
        catchError(this.handleError)
      );
  }

  getCategory(): Observable<any[]> {
    return this.http.get<SurveryCategoryDTO[]>(this.surveyUrl + "/GetAllSurveyCategoryRates")
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

  getCategoryNameByEnum(enumNumber: number) :string {
    switch(enumNumber){
      case 0:{
        return 'Hospital';
      }
      case 1:{
        return 'Staff';
      }
      case 2:{
        return 'Application';
      }
      default:{
        return '';
      }
    }
  }
}