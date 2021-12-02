import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home/patient-feedbacks', title: 'PATIENT FEEDBACKS',  icon: 'pe-7s-like2', class: '' },
    { path: '/home/pharmacyFeedback', title: 'PHARMACY FEEDBACKS', icon:'pe-7s-note2', class: '' },
    { path: '/home/medicationSpecification', title: 'MEDICATIONS', icon:'pe-7s-note2', class: '' },
    { path: '/home/pharmacyOffers', title: 'PHARMACY OFFERS', icon:'pe-7s-note2', class: '' },
    { path: '/home/app-hospital-map', title: 'HOSPITAL MAP', icon:'pe-7s-note2', class: '' },
    { path: '/home/surveyStats', title: 'SURVEY STATS', icon:'pe-7s-note2', class: '' },
    { path: '/home/urgentProcurement', title: 'URGENT PROCUREMENT', icon:'pe-7s-note2', class: '' },
    { path: '/home/prescription', title: 'PRESCRIPTIONS', icon:'pe-7s-note2', class: '' }
  
];

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{

    menuItems: any[];
  
    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    
    isMobileMenu() {
        if ( window.innerWidth > 991) {
            return false;
        }
        return true;
    }

}