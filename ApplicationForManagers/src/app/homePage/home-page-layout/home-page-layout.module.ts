import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { SidebarComponent } from "../component/sidebar/sidebar.component";
import { FirstfloorComponent } from "../firstfloor/firstfloor.component";
import { HomePageComponent } from "../home/homePage.component";
import { HospitalMapComponent } from "../hospital-map/hospital-map.component";
import { MedicationConsumptionReportComponent } from "../medication-consumption-report/medication-consumption-report.component";
import { MedicationSpecificationFormComponent } from "../medication-specification-form/medication-specification-form.component";
import { PatientFeedbacksComponent } from "../patient-feedbacks/patient-feedbacks.component";
import { PharmacyOffersComponent } from "../pharmacy-offers/pharmacy-offers.component";
import { PharmacyFeedbackComponent } from "../pharmacyFeedback/pharmacyFeedback.component";
import { PharmacyFeedbackFormComponent } from "../pharmacyFeedbackForm/pharmacyFeedbackForm.component";
import { PharmacyFeedbacksComponent } from "../pharmacyFeedbacks/pharmacyFeedbacks.component";
import { SecondfloorComponent } from "../secondfloor/secondfloor.component";
import { HomePageLayoutRoutes } from "./home-page-layout.routing";

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(HomePageLayoutRoutes),
        ToastrModule.forRoot()
    ],
    declarations: [
        HomePageComponent,
        PharmacyFeedbackComponent,
        SidebarComponent,
        PharmacyFeedbackFormComponent,
        PharmacyFeedbacksComponent,
        HospitalMapComponent,
        FirstfloorComponent,
        PatientFeedbacksComponent,
        SecondfloorComponent,
        MedicationSpecificationFormComponent,
        PharmacyOffersComponent,
        MedicationConsumptionReportComponent
    ],
    exports: [
        SidebarComponent
    ]
})

export class HomePageLayoutModule { }