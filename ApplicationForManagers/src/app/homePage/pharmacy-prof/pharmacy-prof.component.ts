import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pharmacy } from 'src/app/shared/pharmacy';
import { PharmacyComment } from 'src/app/shared/pharmacy-comment';
import { PharmacyCommentService } from 'src/app/shared/pharmacy-comment.service';
import { PharmacyService } from 'src/app/shared/pharmacy.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  pharmacyAddress: string = "";
  pharmacyCity: string = "";
  selectedFile: string = "";
  uploadModeOn: boolean = false;
  currentPharmacyImage: SafeResourceUrl = "";

  constructor(private router: Router, private service: PharmacyService,
     private service2: PharmacyCommentService,
     private toastr: ToastrService,
     private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.pharmacyName = this.extractPharmacyName(this.router.url)
    this.service.getPharmacy(this.extractPharmacyName(this.pharmacyName))
      .subscribe(res => { this.pharmacy = res; this.loadCurrentPharmacyImage(this.pharmacy.pharmacyPicture);});
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
          this.toastr.success('Yourcomment is submitted successfully!', 'Comment register');
        },
        err => {
          console.log(err);
          this.toastr.error('Your comment is not submitted successfully!', 'Comment register');
        }
      );
      location.reload();
  }

  editPharmacy() {
    if(this.pharmacy.address == '' || this.pharmacy.city == '') {
      this.toastr.error('You have to fill all fields!', 'Feedback register');
      return;
    }
    this.changeEditMode();
    this.service.editPharmacy(this.pharmacy).subscribe(
      (res) => {
        console.log("Successfuly registered to database");
        this.toastr.success('You successfully updated pharmacy!', 'Pharmacy Update');
      },
      err => {
        console.log(err);
        this.toastr.error('You haven\'t updated pharmacy!', 'Pharmacy Update');
      }
    );
  }

  onFileSelected(event: Event) {
    console.log(event)
  
  }

  changeUploadMode() {
    if(this.uploadModeOn) {
      this.uploadModeOn = false;
    } else {
      this.uploadModeOn = true;
    }
  }

  loadCurrentPharmacyImage(pharmacyImage: string): void {
    if (pharmacyImage == null) {
      this.currentPharmacyImage = "../../assets/pharmacyImages/default-image.jpg";
      return;
    }
    this.service.getCurrentPharmacyImage(pharmacyImage).subscribe(
      res => {
        this.currentPharmacyImage = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + res);
        console.log(this.currentPharmacyImage);
      },
      error => {
        console.log(error);
      }
    );
  }

  

  onUpload() {}


}
