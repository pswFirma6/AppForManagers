import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class PharmacyService{
    readonly basePharmacy = "https://localhost:44317/api/Feedbacks/pharmacyNames";

    pharmacyNames: string[] = [];

    constructor(private http: HttpClient) { }


    getFeedbacks(){
        this.http.get(this.basePharmacy)
         .toPromise()
         .then(res => this.pharmacyNames = res as string[]);
       }
}