import { Routes } from "@angular/router";
import { FirstfloorComponent } from "../firstfloor/firstfloor.component";
import { HomePageComponent } from "../home/homePage.component";
import { HospitalMapComponent } from "../hospital-map/hospital-map.component";
import { PatientFeedbacksComponent } from "../patient-feedbacks/patient-feedbacks.component";
import { PharmacyFeedbackComponent } from "../pharmacyFeedback/pharmacyFeedback.component";
import { SecondfloorComponent } from "../secondfloor/secondfloor.component";

export const HomePageLayoutRoutes: Routes = [
    { path: 'pharmacyFeedback', component: PharmacyFeedbackComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'app-hospital-map',component : HospitalMapComponent},
    { path: 'app-firstfloor',component : FirstfloorComponent},
    { path: 'app-secondfloor',component : SecondfloorComponent},
    { path: 'patient-feedbacks', component: PatientFeedbacksComponent }
]