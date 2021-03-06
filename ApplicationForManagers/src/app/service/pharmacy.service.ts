import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pharmacy } from "../shared/pharmacy";

@Injectable({
    providedIn: 'root'
  })

export class PharmacyService{
    readonly basePharmacy = "http://localhost:44317/api/Feedbacks/pharmacyNames";

    pharmacyNames: string[] = [];
    pharmacyUrl = "http://localhost:44317/pharmacies";
    pharmacyUrl2 = "http://localhost:44317/pharmacyByName/";
    pharmacyUrl3 = "http://localhost:44317/editPharmacy";

    constructor(private http: HttpClient) { }


    getFeedbacks(){
        this.http.get(this.basePharmacy)
         .toPromise()
         .then(res => this.pharmacyNames = res as string[]);
       }
       getPharmacies(): Observable<Pharmacy[]> {
        return this.http.get<Pharmacy[]>(this.pharmacyUrl);
      }
  
      getPharmacy(pharmacyName: string): Observable<Pharmacy> {
        let headers = new HttpHeaders();
        headers  = headers.append('responseType', 'json');
        return this.http.get<Pharmacy>(`http://localhost:44317/pharmacyByName/${pharmacyName}`, {headers: headers});
      }
    editPharmacy(pharmacy: Pharmacy) {
      return this.http.put(this.pharmacyUrl3, pharmacy);
    }
}