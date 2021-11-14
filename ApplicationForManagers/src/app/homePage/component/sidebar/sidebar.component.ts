import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/patient-feedbacks', title: 'PATIENT FEEDBACKS',  icon: 'pe-7s-like2', class: '' },
    { path: '/pharmacyFeedback', title: 'PHARMACY FEEDBACKS', icon:'pe-7s-note2', class: '' },
    { path: '/medicationSpecification', title: 'MEDICATION SPECIFICATIONS', icon:'pe-7s-note2', class: '' },
    { path: '/app-hospital-map', title: 'HOSPITAL MAP', icon:'pe-7s-note2', class: '' },
  
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