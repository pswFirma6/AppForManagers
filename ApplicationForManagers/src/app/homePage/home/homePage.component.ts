import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './homePage.component.html',
    styleUrls: ['./homePage.component.css']
})

export class HomePageComponent {
    imageUrl: string = "../../assets/images/homePageImage.jpg"
}