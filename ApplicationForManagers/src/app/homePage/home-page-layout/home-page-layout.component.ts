import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-home-page-layout',
  templateUrl: './home-page-layout.component.html',
  styleUrls: ['./home-page-layout.component.css']
})
export class HomePageLayoutComponent implements OnInit {
token: any;

constructor(private jwtHelper: JwtHelperService) { }

ngOnInit(): void {
  this.isPatientAuthenticated()
}

isPatientAuthenticated() {
  this.token = localStorage.getItem("jwt");
  if(this.token && !this.jwtHelper.isTokenExpired(this.token)) {
    return true;
  } else {
    return false;
  }
}
}
