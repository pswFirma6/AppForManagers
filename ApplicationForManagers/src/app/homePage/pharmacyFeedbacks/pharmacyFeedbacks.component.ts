import { Component, OnInit } from "@angular/core";
import { FeedbackModel } from "src/app/shared/feedback.model";
import { FeedbackService } from "src/app/service/feedback.service";
import { FeedbackResponseModel } from "src/app/shared/feedbackResponse.model";

@Component({
    selector: 'pharmacyFeedbacks',
    templateUrl: './pharmacyFeedbacks.component.html',
    styleUrls: ['./pharmacyFeedbacks.component.css']
})

export class PharmacyFeedbacksComponent implements OnInit{
    feedbacks: FeedbackModel[] =[];
    responses: FeedbackResponseModel[] = [];
    responseVisibility: boolean[] = [];
    response: FeedbackResponseModel = new FeedbackResponseModel();
    constructor(public service: FeedbackService) { 
    }

    ngOnInit(): void {
        this.service.getFeedbacks()
            .subscribe(res => this.feedbacks = res);
        this.responseVisibility.length = this.feedbacks.length;
        for(let response of this.responseVisibility){
            response = false;
        }
        this.service.getFeedbackResponses()
            .subscribe((res:any) => this.responses = res);
    }

    changeVisibility(feedbackId: number, responseId:number): void {
        this.responseVisibility[feedbackId-1] = !this.responseVisibility[feedbackId-1];
        this.showResponse(responseId);
    }

    showResponse(responseId: number): void {
        for(let res of this.responses){
            if(res.id == responseId){
                this.response = res;
            }
        }
    }
}