import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalSettings } from '../global';
import { AppointmentEvent } from '../shared/AppointmentEvent';
import { AppointmentEventUncreated } from '../shared/appointmentEventUncreated';

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
 
    getAllCreatedEventsDoctor(): Observable<AppointmentEventUncreated[]> {
        return this.http.get<AppointmentEventUncreated[]>(this.eventUrl + '/allEventsCreatedDoctor')
    }

}