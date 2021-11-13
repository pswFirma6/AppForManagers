import { Component, OnInit } from "@angular/core";
import { FeedbackService } from "../shared/feedback.service";

@Component({
    selector: 'pharmacyFeedback',
    templateUrl: './pharmacyFeedback.component.html',
    styleUrls: ['./pharmacyFeedback.component.css']
})

export class PharmacyFeedbackComponent{
   
    
    newFeedback: boolean = false;
    buttonText: string = "Create new feedback";

    toggleCreateButton(): void { 
        this.newFeedback = !this.newFeedback;
        if(this.newFeedback){
            this.buttonText = "Show all feedbacks";
        } else {
            this.buttonText = "Create new feedback";
        }
    }
}