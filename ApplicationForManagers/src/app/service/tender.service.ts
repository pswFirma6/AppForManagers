import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tender } from "../shared/tender.model";

@Injectable({
    providedIn: 'root'
  })

export class TenderService{

    url = "http://localhost:44317/createTender";
    constructor(private http: HttpClient) { }

    
    CreateTender(tender: Tender) {
        this.http.post(this.url,tender);
      }

}