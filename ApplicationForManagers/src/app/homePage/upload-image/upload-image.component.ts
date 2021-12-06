import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs-compat/operator/ignoreElements';
import { UploadImageService } from 'src/app/shared/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl: string = "../../assets/pharmacyImages/default-image.jpg";

  constructor(private service: UploadImageService, private router : Router) { }

  ngOnInit(): void {
  }

  uploadFile(files: FileList | null) {
    if(files != null) {
      if (files.length == 0) {
        return;
      }
      let fileToUpload = <File> files[0];
      const formData = new FormData();
      formData.append('Image', fileToUpload, fileToUpload.name);

      this.service.uploadImage(formData, this.extractPharmacyName(this.router.url));
    }
  }

  extractPharmacyName(url: string): string {
    var splitted = url.split('/', 10);
    var name = splitted[splitted.length-1];
    return name;
  }

  /*handleFileInput(event : Event) {
    if((event.target as HTMLInputElement).files != null) {
      this.fileToUpload = <File>(event.target as HTMLInputElement).files!.item(0);
      //show image preview
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }

      reader.readAsDataURL(this.fileToUpload);
    }
  }

  onSubmit(value: string) {
    console.log(value)
  }*/

}
