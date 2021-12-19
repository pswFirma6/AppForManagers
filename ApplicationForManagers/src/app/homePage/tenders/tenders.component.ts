import { Component, OnInit } from '@angular/core';
import { TenderService } from 'src/app/service/tender.service';
import { Tender } from 'src/app/shared/tender.model';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  tenders : Tender[] = [];


  constructor(public service: TenderService) { }

  ngOnInit(): void {
    this.service.GetTenders()
    .subscribe(res => this.tenders = res);
    console.log(this.tenders)
  }

}
