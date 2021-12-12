import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackModel } from '../shared/feedback.model';
import { Observable } from 'rxjs';
import { FeedbackResponseModel } from '../shared/feedbackResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService{

  formFeedback: FeedbackModel= new FeedbackModel();
  readonly baseUrl = "http://localhost:44317/api/Feedbacks";
  readonly baserUrlResponses = "http://localhost:44317/api/Feedbacks/pharmacy/getFeedbackResponse";
  readonly basePharmacy = "http://localhost:44317/api/Feedbacks/pharmacyNames";
  feedbackList: FeedbackModel[] = [];
  feedbackResponses : FeedbackResponseModel[] = [];
  feedbackResponse: FeedbackResponseModel = new FeedbackResponseModel();
  pharmacyNames: string[] = [];
  
  constructor(private http: HttpClient) { }

  postLogin(){
    var date = new Date().toLocaleString().split(' ');
    this.formFeedback.feedbackDate = date[0];
    console.log(this.formFeedback);
    return this.http.post(this.baseUrl,this.formFeedback);
  }

  getFeedbacks(): Observable<FeedbackModel[]>{
    return this.http.get<FeedbackModel[]>(this.baseUrl);
  }

  getFeedbackResponses(): Observable<FeedbackResponseModel[]>{
    return this.http.get<FeedbackResponseModel[]>(this.baserUrlResponses);
   }

  getPharmacyNames(): Observable<string[]>{
     return this.http.get<string[]>(this.basePharmacy);
  }

   validate(feedbackValid: FeedbackModel): string{
     if(feedbackValid.content.length === 0) {
      return 'You must fill the content';
     } else if (feedbackValid.pharmacyName.length === 0) {
      return 'You must choose pharmacy!'
     }
     return 'Successfull!'
   }

}
