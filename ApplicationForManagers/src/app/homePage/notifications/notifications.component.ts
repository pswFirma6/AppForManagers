import { Component, OnInit } from "@angular/core";
import { NotificationsModel } from "src/app/shared/notifications.model";
import { NotificationsService } from "./notifications.service";


@Component({
    selector: 'notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})

export class NotificationComponent implements OnInit{

    notifications: NotificationsModel[] = []

    constructor(public service: NotificationsService) { }


    ngOnInit(): void {
        this.service.getNotifications().subscribe(
            res =>{ this.notifications = res;
            console.log(res);
            }
          );
    }

    readMessage(notification: NotificationsModel){
        this.service.updateNotification(notification).subscribe(
            res=>{location.reload()}
        )
    }
}