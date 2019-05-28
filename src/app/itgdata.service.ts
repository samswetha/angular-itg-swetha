import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ItgdataService {


apiURL = 'https://itg-prd-recruit.appspot.com/api';
constructor(private http: HttpClient) {

 }

getVehicles() {

    return this.http
    .get(`${this.apiURL}/vehicles`)
  }
          

vehicleData(id) {
  return this.http
  .get(`${this.apiURL}/vehicle/${id}`);
  }

  getVechilesCompleteInfo() {
    this.getVehicles().subscribe((data: any) =>  {
      return {
      id: data.id,
      description : data.description,
      price : data.price
      };

  });
  }
}
