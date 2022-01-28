import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalSettings } from '../global';
import { AppointmentEvent } from '../shared/AppointmentEvent';
import { AppointmentEventUncreated } from '../shared/appointmentEventUncreated';
import { SpecialitiesStat } from '../shared/statsForSpecialities';

@Injectable({
    providedIn: 'root',
})
export class EventService {

    eventUrl = GlobalSettings.baseUrl + "/api/Event";

    constructor(private http: HttpClient) { }

    getAllEvents(): Observable<AppointmentEvent[]> {
        return this.http.get<AppointmentEvent[]>(this.eventUrl + '/getAllEvents')
    }
    
    getAllUncreatedAppEvents(): Observable<AppointmentEventUncreated[]> {
        return this.http.get<AppointmentEventUncreated[]>(this.eventUrl + '/allEventsUncreated')
    }
 
    getAllCreatedEventsDoctor(): Observable<SpecialitiesStat[]> {
        return this.http.get<SpecialitiesStat[]>(this.eventUrl + '/allEventsCreatedDoctor')
    }


    getDates(): Observable<number[]>{
        return this.http.get<number[]>(this.eventUrl + '/getStepsPerDate')
    
    }
    getAverageStepTime(): Observable<number[]>{
        return this.http.get<number[]>(this.eventUrl + '/getAverageStepTime')
    }
    
}