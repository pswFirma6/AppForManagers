import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tender, TenderOffer, TenderOfferItem } from "../shared/tender.model";

@Injectable({
    providedIn: 'root'
  })

export class TenderService{



    url = "http://localhost:44317/addTender";
    urlget = "http://localhost:44317/getTenders";
    urlclose= "http://localhost:44317/closeTender";
    urloffers = "http://localhost:44317/getTenderOffers";

    constructor(private http: HttpClient) { }
  
    GetTenderOffers(): Observable<TenderOffer[]> {
      console.log('geting tender offers..')
      return this.http.get<TenderOffer[]>(this.urloffers);    
    }

    GetTenders(): Observable<Tender[]> {
      console.log('geting tenders..')
      return this.http.get<Tender[]>(this.urlget);
    }
    
    CreateTender(tender: Tender) {
        console.log(tender);
        return this.http.post(this.url, tender);
      }
    
    CloseTender(offer: TenderOffer) {
      console.log('Tender should be closed')
      return this.http.post(this.urlclose,offer)
    }

}