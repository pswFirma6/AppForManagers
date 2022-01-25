import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalSettings } from '../global';
import { AppointmentEvent } from '../shared/AppointmentEvent';

@Injectable({
    providedIn: 'root',
})
export class EventService {

    eventUrl = GlobalSettings.baseUrl + "/api/Event";

    constructor(private http: HttpClient) { }

    getAllEvents(): Observable<AppointmentEvent[]> {
        return this.http.get<AppointmentEvent[]>(this.eventUrl + '/getAllEvents')
            .pipe(
                catchError(this.handleError)
            );
    }
    getDates(): Observable<number[]>{
        return this.http.get<number[]>(this.eventUrl + '/getStepsPerDate')
            .pipe(
                catchError(this.handleError)
            );
    }
    getAverageStepTime(): Observable<number[]>{
        return this.http.get<number[]>(this.eventUrl + '/getAverageStepTime')
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