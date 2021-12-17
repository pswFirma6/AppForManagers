import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tender,TenderItem } from 'src/app/shared/tender.model';
import { TenderService } from 'src/app/service/tender.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  addingNewItem: boolean = false;
  tender: Tender = new Tender();
  tenderItems : TenderItem[] = [];
  tempItem: TenderItem = new TenderItem();

  constructor(public service: TenderService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.tender.tenderItems = this.tenderItems;
    console.log(this.tender)
    this.service.CreateTender(this.tender);
  }

  AddNewItem(){
    this.addingNewItem = true;
  }

  AddNewItemConfirm(){
    if (this.tempItem.name == '' || this.tempItem.quantity == null){
      alert('input fields should not be empty!')
      return
    }
    this.addingNewItem = false;
    this.tenderItems.push(this.tempItem);
    this.tempItem = new TenderItem();
    console.log(this.tempItem)

  }
  CancelAddingItem(){
    this.addingNewItem = false;
    this.tempItem = new TenderItem();
  }

}
