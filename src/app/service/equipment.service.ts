import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const EQUIPMENT_URL = 'http://localhost:8080/equipments/'

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http:HttpClient ) { }

  getEquipments(): Observable<any>{
    return this.http.get(EQUIPMENT_URL);
  }
}
