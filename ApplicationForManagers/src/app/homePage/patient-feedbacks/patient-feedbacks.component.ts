import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PatientFeedbackService } from 'src/app/service/patient-feedbacks.service';
import { FeedbackState, PatientFeedbacks } from 'src/app/shared/patient-feedback';



@Component({
  selector: 'app-patient-feedbacks',
  templateUrl: './patient-feedbacks.component.html',
  styleUrls: ['./patient-feedbacks.component.css']
})
export class PatientFeedbacksComponent implements OnInit {
  feedbacks: any = [];
  constructor(private patientFeedbackService: PatientFeedbackService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  public fetchData(): void {
    this.patientFeedbackService.getMethod()
    .subscribe((data: {}) => {
        this.feedbacks = data;
      }
    );
  }

  public GetFeedbackState(feedback: PatientFeedbacks): string {
    switch(feedback.state){
      case 0: {
        return 'approved';
      }
      case 1: {
        return 'rejected';
      }
      default: {
        return 'pending';
      }
    }
  }

  public approveRequest(feedback: PatientFeedbacks): boolean {
    this.patientFeedbackService.approveFeedback(feedback.id)
    .subscribe(response => {
      feedback.state = FeedbackState.approved;
      return true;
    });
    return false;
  }

  public rejectRequest(feedback: PatientFeedbacks): boolean {
    this.patientFeedbackService.rejectFeedback(feedback.id)
    .subscribe(response => {
      feedback.state = FeedbackState.rejected;
      return true;
    });
    return false;
  }

  public withdrawAction(feedback: PatientFeedbacks): boolean {
    this.patientFeedbackService.withdrawFeedbackAction(feedback.id)
    .subscribe(response => {
      feedback.state = FeedbackState.pending;
      return true;
    });
    return false;
  }
}


