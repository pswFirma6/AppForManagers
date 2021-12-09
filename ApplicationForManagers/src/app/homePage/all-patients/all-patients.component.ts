import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';
import { Patients } from 'src/app/shared/patients';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  public patients: Patients[] = []
  
  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getMethod().subscribe(res =>{
      console.log(res)
      this.patients = res;
      console.log(this.patients)
    });

}
}
