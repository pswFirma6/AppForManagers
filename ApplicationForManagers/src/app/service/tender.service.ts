import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tender } from "../shared/tender.model";

@Injectable({
    providedIn: 'root'
  })

export class TenderService{

    url = "http://localhost:44317/addTender";
    urlget = "http://localhost:44317/getTenders";
    constructor(private http: HttpClient) { }
  
    GetTenders(): Observable<Tender[]> {
      console.log('geting tenders..')
      return this.http.get<Tender[]>(this.urlget);
    }
    
    CreateTender(tender: Tender) {
        console.log(tender);
        return this.http.post(this.url, tender);
      }

}