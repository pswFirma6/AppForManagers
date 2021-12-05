import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pharmacy } from 'src/app/shared/pharmacy';
import { PharmacyComment } from 'src/app/shared/pharmacy-comment';
import { PharmacyCommentService } from 'src/app/shared/pharmacy-comment.service';
import { PharmacyService } from 'src/app/shared/pharmacy.service';

@Component({
  selector: 'app-pharmacy-prof',
  templateUrl: './pharmacy-prof.component.html',
  styleUrls: ['./pharmacy-prof.component.css']
})
export class PharmacyProfComponent implements OnInit {

  pharmacyName: string = "";
  pharmacies: Pharmacy[] = [];
  comments: PharmacyComment[] = [];
  pharmacy: Pharmacy = new Pharmacy();
  editModeOn: boolean = false;
  commentModeOn: boolean = false;
  commentContent: string = "";
  id: number = 0;
  comment: PharmacyComment = new PharmacyComment();

  constructor(private router: Router, private service: PharmacyService, private service2: PharmacyCommentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pharmacyName = this.extractPharmacyName(this.router.url)
    this.service.getPharmacy(this.extractPharmacyName(this.pharmacyName))
      .subscribe(res => this.pharmacy = res);
    this.service2.getPharmacyComments(this.extractPharmacyName(this.pharmacyName))
    .subscribe(res => this.comments = res);
  }

  extractPharmacyName(url: string): string {
    var splitted = url.split('/', 10);
    var name = splitted[splitted.length-1];
    return name;
  }

  changeEditMode() {
    if(this.editModeOn) {
      this.editModeOn = false;
    } else {
      this.editModeOn = true;
    }
  }

  changeCommentMode() {
    if(this.commentModeOn) {
      this.commentModeOn = false;
    } else {
      this.commentModeOn = true;
    }
  }

  addComment() {
    this.id = this.comments.length + 1;
    this.comment = {
      pharmacyName : this.pharmacyName,
      content : this.commentContent,
      commentDate: new Date };
      console.log(this.comment);
      if(this.commentContent == '') {
        this.toastr.error('You have to fill content!', 'Feedback register');
        return;
      }
      this.service2.addPharmacyComment(this.comment).subscribe(
        (res) => {
          console.log("Successfuly registered to database");
          this.toastr.success('Your feedback is submitted successfully!', 'Feedback register');
        },
        err => {
          console.log(err);
          this.toastr.error('Your feedback is not submitted successfully!', 'Feedback register');
        }
      );
      location.reload();
  }

}
