import { Component } from "@angular/core";

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

    menuItems: any[] = [
        {
            path: '/patient-feedbacks',
            title: 'PATIENTS FEEDBACKS',
            class: ''
        },
        {
            path: '/pharmacyFeedback',
            title: 'PHARMACY FEEDBACKS',
            class: ''
        },
        {
            path: '/app-hospital-map',
            title: 'HOSPITAL MAP',
            class : ''
        }
    ]
  
    constructor() { }

}