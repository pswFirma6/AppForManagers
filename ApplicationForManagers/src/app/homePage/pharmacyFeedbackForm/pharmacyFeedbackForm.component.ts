import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { FeedbackModel } from "src/app/shared/feedback.model";
import { FeedbackService } from "src/app/service/feedback.service";

@Component({
    selector: 'pharmacyFeedbackForm',
    templateUrl: './pharmacyFeedbackForm.component.html',
    styleUrls: ['./pharmacyFeedbackForm.component.css']
})

export class PharmacyFeedbackFormComponent  implements OnInit{
    constructor(public service: FeedbackService, private toastr: ToastrService ) { }

    title: string = "Pharmacy Feedback";
    pharmacies: string[] = [];

    ngOnInit(): void  {
        this.service.getPharmacyNames()
          .subscribe(res => this.pharmacies = res);
    }   

    onSubmit(form: NgForm){
      this.service.postLogin().subscribe(
        (res) => {
          console.log("Successfuly registered to database");
          this.resetForm(form);
          this.toastr.success('Your feedback is submitted successfully!', 'Feedback register');
        }
      );
    }

    resetForm(form: NgForm) {
      form.form.reset();
      this.service.formFeedback = new FeedbackModel();
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