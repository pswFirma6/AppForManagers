import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://localhost:5001";

  constructor(private http: HttpClient) { }

  getBuildings() {
    return this.http.get(this.baseUrl + '/api/building');
  }

  getFloors() {
    return this.http.get(this.baseUrl + '/api/floor');
  }

  getRooms() {
    return this.http.get(this.baseUrl + '/api/room');
  }

  getDoctors() {
    return this.http.get(this.baseUrl + '/api/doctor');
  }

  getEquipments() {
    return this.http.get(this.baseUrl + '/api/equipment');
  }
}
