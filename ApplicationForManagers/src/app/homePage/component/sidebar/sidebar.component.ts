import { Component, OnInit } from "@angular/core";
import { NotificationsModel } from "src/app/shared/notifications.model";
import { NotificationsService } from "../../notifications/notifications.service";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home/notifications', title: 'NOTIFICATIONS', icon:'pe-7s-note2', class:''},
    { path: '/home/patient-feedbacks', title: 'PATIENT FEEDBACKS',  icon: 'pe-7s-like2', class: '' },
    { path: '/home/pharmacyFeedback', title: 'PHARMACY FEEDBACKS', icon:'pe-7s-note2', class: '' },
    { path: '/home/medicationSpecification', title: 'MEDICATIONS', icon:'pe-7s-note2', class: '' },
    { path: '/home/pharmacyOffers', title: 'PHARMACY OFFERS', icon:'pe-7s-note2', class: '' },
    { path: '/home/app-hospital-map', title: 'HOSPITAL MAP', icon:'pe-7s-note2', class: '' },
    { path: '/home/surveyStats', title: 'SURVEY STATS', icon:'pe-7s-note2', class: '' },
    { path: '/home/urgentProcurement', title: 'URGENT PROCUREMENT', icon:'pe-7s-note2', class: '' },
    { path: '/home/prescription', title: 'PRESCRIPTIONS', icon:'pe-7s-note2', class: '' },
    { path: '/home/patients', title: 'ALL PATIENTS', icon:'pe-7s-note2', class: '' },
    { path: '/home/pharmacies', title: 'PHARMACIES', icon:'pe-7s-note2', class: '' },
    { path: '/home/tenders', title: 'TENDERS', icon:'pe-7s-note2', class: '' },
    { path: '/home/statistics', title: 'STATISTCIS', icon:'pe-7s-note2', class: '' }

  
];

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{

    menuItems: any[];

    notifications: NotificationsModel[] = []

    exists: boolean = false;
  
    constructor(public service: NotificationsService) { }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.service.getNotifications().subscribe(
            res =>{ this.notifications = res;
            console.log(res);
            this.exists = this.checkForNewNotifications()}
          );
    }
    
    isMobileMenu() {
        if ( window.innerWidth > 991) {
            return false;
        }
        return true;
    }

    checkForNewNotifications(): boolean{
        for(let notification of this.notifications){
            if (!notification.read){
                return true;
            }
        }
        return false;
    }

}