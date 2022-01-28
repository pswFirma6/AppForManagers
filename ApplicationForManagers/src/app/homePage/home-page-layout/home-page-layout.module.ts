import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from "ngx-toastr";
import { SidebarComponent } from "../component/sidebar/sidebar.component";
import { FirstfloorComponent } from "../firstfloor/firstfloor.component";
import { HomePageComponent } from "../home/homePage.component";
import { HospitalMapComponent } from "../hospital-map/hospital-map.component";
import { MedicationAvailabilityComponent } from "../medication-availability/medication-availability.component";
import { MedicationConsumptionReportComponent } from "../medication-consumption-report/medication-consumption-report.component";
import { MedicationSpecificationFormComponent } from "../medication-specification-form/medication-specification-form.component";
import { MedicationsNavbarComponent } from "../medications-navbar/medications-navbar.component";
import { PatientFeedbacksComponent } from "../patient-feedbacks/patient-feedbacks.component";
import { PharmacyOffersComponent } from "../pharmacy-offers/pharmacy-offers.component";
import { PharmacyFeedbackComponent } from "../pharmacyFeedback/pharmacyFeedback.component";
import { PharmacyFeedbackFormComponent } from "../pharmacyFeedbackForm/pharmacyFeedbackForm.component";
import { PharmacyFeedbacksComponent } from "../pharmacyFeedbacks/pharmacyFeedbacks.component";
import { SecondfloorComponent } from "../secondfloor/secondfloor.component";
import { SurveyStatsComponent } from "../survey-stats/survey-stats.component";
import { HomePageLayoutRoutes } from "./home-page-layout.routing";
import { UrgentProcurementComponent } from "../urgent-procurement/urgent-procurement.component";
import { EquipmentFilterPipe } from '../equipment-filter.pipe';
import { EquipmentTransferComponent } from '../equipment-transfer/equipment-transfer.component';
import { PrescriptionComponent } from "../prescription/prescription.component";
import { PharmacyProfileComponent } from "../pharmacy-profile/pharmacy-profile.component";
import { PharmacyProfComponent } from "../pharmacy-prof/pharmacy-prof.component";
import { UploadImageComponent } from "../upload-image/upload-image.component";
import { NotificationComponent } from "../notifications/notifications.component";
import { ChartsModule } from "ng2-charts";
import { StatisticsComponent } from "../statistics/statistics.component";
import { NavbarComponent } from "../component/navbar/navbar.component";
import { LineEventtimeComponent } from "../charts/line-eventtime/line-eventtime.component";
import { LineEventStepsComponent } from "src/app/homePage/charts/line-event-steps/line-event-steps.component";
import { LineEventStepTimeComponent } from "src/app/homePage/charts/line-event-step-time/line-event-step-time.component";
import { PieEventDoctorComponent } from "../charts/pie-event-doctor/pie-event-doctor.component";
import { BarEventStepsDateComponent } from "../charts/bar-event-steps-date/bar-event-steps-date.component";


@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(HomePageLayoutRoutes),
        ToastrModule.forRoot(),
        Ng2SearchPipeModule,
        ChartsModule
    ],
    declarations: [
        HomePageComponent,
        PharmacyFeedbackComponent,
        SidebarComponent,
        NavbarComponent,
        PharmacyFeedbackFormComponent,
        PharmacyFeedbacksComponent,
        HospitalMapComponent,
        FirstfloorComponent,
        PatientFeedbacksComponent,
        SecondfloorComponent,
        MedicationSpecificationFormComponent,
        PharmacyOffersComponent,
        MedicationConsumptionReportComponent,
        SurveyStatsComponent,
        UrgentProcurementComponent,
        MedicationsNavbarComponent,
        MedicationAvailabilityComponent,
        EquipmentFilterPipe,
        EquipmentTransferComponent,
        PrescriptionComponent,
        PrescriptionComponent,
        PharmacyProfileComponent,
        PharmacyProfComponent,
        UploadImageComponent,
        NotificationComponent,
        StatisticsComponent,
        LineEventtimeComponent,
        LineEventStepsComponent,
        LineEventStepTimeComponent,
        PieEventDoctorComponent,
        BarEventStepsDateComponent,

    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        UrgentProcurementComponent
    ]
})

export class HomePageLayoutModule { }