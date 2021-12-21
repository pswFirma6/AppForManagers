import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageLayoutComponent } from './homePage/home-page-layout/home-page-layout.component';
import { HomePageLayoutModule } from './homePage/home-page-layout/home-page-layout.module';
import { LandingpageLayoutComponent } from './landingpage/landingpage-layout/landingpage-layout.component';
import { LandingpageLayoutModule } from './landingpage/landingpage-layout/landingpage-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AllPatientsComponent } from './homePage/all-patients/all-patients.component';
import { TenderComponent } from './homePage/tender/tender.component';
import { TenderingNavabarComponent } from './homePage/tendering-navabar/tendering-navabar.component';
import { TendersComponent } from './homePage/tenders/tenders.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageLayoutComponent,
    LandingpageLayoutComponent,
    AllPatientsComponent,
    TenderComponent,
    TenderingNavabarComponent,
    TendersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HomePageLayoutModule,
    LandingpageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
