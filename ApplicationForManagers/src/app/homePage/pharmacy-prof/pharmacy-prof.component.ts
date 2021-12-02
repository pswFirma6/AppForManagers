import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmacy-prof',
  templateUrl: './pharmacy-prof.component.html',
  styleUrls: ['./pharmacy-prof.component.css']
})
export class PharmacyProfComponent implements OnInit {

  pharmacyName: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pharmacyName = params['name'];
    });
  }

}
