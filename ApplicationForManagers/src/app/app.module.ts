import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/homePage.component';
import { PharmacyFeedbackComponent } from './pharmacyFeedback/pharmacyFeedback.component';
import { PharmacyFeedbackFormComponent } from './pharmacyFeedbackForm/pharmacyFeedbackForm.component';
import { PharmacyFeedbacksComponent } from './pharmacyFeedbacks/pharmacyFeedbacks.component';
import {HttpClientModule} from '@angular/common/http';
import { HospitalMapComponent } from './hospital-map/hospital-map.component';
import { FirstfloorComponent } from './firstfloor/firstfloor.component';
import { PatientFeedbacksComponent } from './patient-feedbacks/patient-feedbacks.component';
import { SecondfloorComponent } from './secondfloor/secondfloor.component';
import { LandingpageLayoutComponent } from './landingpage/landingpage-layout/landingpage-layout.component';
import { LandingpageLayoutModule } from './landingpage/landingpage-layout/landingpage-layout.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PharmacyFeedbackComponent,
    SidebarComponent,
    PharmacyFeedbackFormComponent,
    PharmacyFeedbacksComponent,
    HospitalMapComponent,
    FirstfloorComponent,
    PatientFeedbacksComponent,
    SecondfloorComponent,
    LandingpageLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'pharmacyFeedback', component: PharmacyFeedbackComponent },
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'app-hospital-map',component : HospitalMapComponent},
      { path: 'app-firstfloor',component : FirstfloorComponent},
      { path: 'app-secondfloor',component : SecondfloorComponent},
      { path: 'patient-feedbacks', component: PatientFeedbacksComponent },
      { path: 'landingpage', component:LandingpageLayoutComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    LandingpageLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
