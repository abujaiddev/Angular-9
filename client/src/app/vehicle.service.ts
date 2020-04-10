import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // uri = "assets/products.json"
  url = "http://localhost:5000/api"
  constructor(private http: HttpClient) { }
  ids: any = []

  // get vehicle form database
  getVehicles() {
    return this.http.get<any[]>(`${this.url}/vehicles`)
  }

  // create vehicle from database
  createVehicle(obj) {
    this.http.post(`${this.url}/create`, obj).subscribe(res => console.log('Done'))
  }

  // delete vehicle
  deleteVehicle(id) {
    this.ids.push(id)
    console.log('===========ids', this.ids)

  }

  deleteRecord(id) {
    console.log('++++++++++++++++++++', id.checkArray)
    this.http.post(`${this.url}/delete`, id.checkArray).subscribe(res => console.log('done'));
  }
}
