import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl: string = "././assets/pharmacyImages/dafault-image.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
