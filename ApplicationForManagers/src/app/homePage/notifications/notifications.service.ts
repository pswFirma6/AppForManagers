import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NotificationsModel } from "src/app/shared/notifications.model";


@Injectable({
    providedIn: 'root'
  })
export class NotificationsService{
 
 
  constructor(private http: HttpClient) {
  }

  newNotification: NotificationsModel = new NotificationsModel;
  readonly newNotificationURL = "https://localhost:44317/newNotification";
  readonly getNotificationsURL = "https://localhost:44317/allNotifications";
  readonly readNotificationURL = "https://localhost:44317/readNotification";

  saveNotification(){
    return this.http.post<NotificationsModel>(this.newNotificationURL, this.newNotification);
  }

  getNotifications() : Observable<NotificationsModel[]> {
    return this.http.get<NotificationsModel[]>(this.getNotificationsURL)
  }

  updateNotification(notification:NotificationsModel) {
    return this.http.put<NotificationsModel>(this.readNotificationURL, notification)
  }
  

  
}