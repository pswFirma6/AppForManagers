import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalMapComponent } from './hospital-map/hospital-map.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
