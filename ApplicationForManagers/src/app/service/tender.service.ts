import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Medicine } from "../shared/medicine.model";
import { Tender, TenderOffer, TenderOfferItem } from "../shared/tender.model";
import { TenderEarning } from "../shared/tenderEarnings.model";
import { TenderParticipants } from "../shared/tenderParticipants.model";

@Injectable({
    providedIn: 'root'
  })

export class TenderService{
    url = "http://localhost:44317/addTender";
    urlget = "http://localhost:44317/getTenders";
    urlclose= "http://localhost:44317/closeTender";
    urloffers = "http://localhost:44317/getTenderOffers";
    urlParticipants = "http://localhost:44317/getTenderParticipants";
    urlWins = "http://localhost:44317/getTenderWinners";
    urlEarning = "http://localhost:44317/getTendersWinningOffersPrices"
    urlPharmacyEarning = "http://localhost:44317/getPharmaciesEarnings"
    urlPharmacyWinningOffer = "http://localhost:44317/pharmacyWinningOffers/"
    urlPharmacyOffers = "http://localhost:44317/pharmacyOffers/"
    urlPharmacyParticipation = "http://localhost:44317/pharmacyParticipations/"
    urlPharmacyWins = "http://localhost:44317/pharmacyWins/"
    urlPharmacyMedicineConsumption = "http://localhost:44317/pharmacyMedicineConsumption/"
    urlPdfReport = "http://localhost:44317/getPdf"

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

    GetTenderParticipants(): Observable<TenderParticipants[]>{
      console.log('Evo me')
      return this.http.get<TenderParticipants[]>(this.urlParticipants)
    }

    GetTenderWins(): Observable<TenderParticipants[]>{
      return this.http.get<TenderParticipants[]>(this.urlWins)
    }

    GetTenderWinningsPrices(): Observable<TenderEarning[]>{
      return this.http.get<TenderEarning[]>(this.urlEarning)
    }

    GetPharmacyEarnings(): Observable<TenderEarning[]>{
      return this.http.get<TenderEarning[]>(this.urlPharmacyEarning)
    }

    GetPharmacyOffers(pharmacyName:string):Observable<TenderEarning[]>{
      let url = this.urlPharmacyOffers + pharmacyName
      return this.http.get<TenderEarning[]>(url)
    }

    GetPharmacyWinningOffer(pharmacyName:string): Observable<TenderEarning[]>{
      let url = this.urlPharmacyWinningOffer + pharmacyName
      return this.http.get<TenderEarning[]>(url)
    }

    GetPharmacyParticipations(pharmacyName:string): Observable<number[]>{
      let url = this.urlPharmacyParticipation + pharmacyName
      return this.http.get<number[]>(url)
    }

    GetPharmacyWins(pharmacyName:string): Observable<number[]>{
      let url = this.urlPharmacyWins + pharmacyName
      return this.http.get<number[]>(url)
    }

    GetPharmacyMedicineConsumption(pharmacyName:string): Observable<Medicine[]>{
      let url = this.urlPharmacyMedicineConsumption + pharmacyName
      return this.http.get<Medicine[]>(url)
    }

    displayPdf(){
      return this.http.get(this.urlPdfReport, {responseType:'blob'})
      .subscribe((result: Blob) =>{
          const blob = new Blob([result],{type: "application/pdf"});
          const pdfurl = window.URL.createObjectURL(blob)
          window.open(pdfurl)
          console.log("success")
  
      });
    }
  }
