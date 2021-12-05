import { Routes } from "@angular/router";
import { FirstfloorComponent } from "../firstfloor/firstfloor.component";
import { HomePageComponent } from "../home/homePage.component";
import { HospitalMapComponent } from "../hospital-map/hospital-map.component";
import { MedicationAvailabilityComponent } from "../medication-availability/medication-availability.component";
import { MedicationConsumptionReportComponent } from "../medication-consumption-report/medication-consumption-report.component";
import { MedicationSpecificationFormComponent } from "../medication-specification-form/medication-specification-form.component";
import { PatientFeedbacksComponent } from "../patient-feedbacks/patient-feedbacks.component";
import { PharmacyOffersComponent } from "../pharmacy-offers/pharmacy-offers.component";
import { PharmacyProfComponent } from "../pharmacy-prof/pharmacy-prof.component";
import { PharmacyProfileComponent } from "../pharmacy-profile/pharmacy-profile.component";
import { PharmacyFeedbackComponent } from "../pharmacyFeedback/pharmacyFeedback.component";
import { PrescriptionComponent } from "../prescription/prescription.component";
import { SearchEquipmentComponent } from "../search-equipment/search-equipment.component";
import { SecondfloorComponent } from "../secondfloor/secondfloor.component";
import { SurveyStatsComponent } from "../survey-stats/survey-stats.component";
import { UrgentProcurementComponent } from "../urgent-procurement/urgent-procurement.component";
import { EquipmentTransferComponent } from '../equipment-transfer/equipment-transfer.component';

export const HomePageLayoutRoutes: Routes = [
    { path: 'pharmacyFeedback', component: PharmacyFeedbackComponent },
    { path: 'app-hospital-map',component : HospitalMapComponent},
    { path: 'app-firstfloor',component : FirstfloorComponent},
    { path: 'app-secondfloor',component : SecondfloorComponent},
    { path: 'patient-feedbacks', component: PatientFeedbacksComponent },
    { path: 'medicationSpecification', component: MedicationSpecificationFormComponent },
    { path: 'pharmacyOffers', component: PharmacyOffersComponent },
    { path: 'medicationConsumptionReport', component: MedicationConsumptionReportComponent },
    { path: 'surveyStats', component: SurveyStatsComponent },
    { path: 'urgentProcurement', component: UrgentProcurementComponent },
    { path: 'medicationAvailability', component: MedicationAvailabilityComponent },
    { path: 'equipmentTransfer', component: EquipmentTransferComponent},
    { path: 'app-search-equipment', component: SearchEquipmentComponent },
    { path: 'prescription', component: PrescriptionComponent },
    { path: 'pharmacies', component: PharmacyProfileComponent },
    { path: 'pharmacies/pharmacy/:pharmacyName' , component: PharmacyProfComponent}

]