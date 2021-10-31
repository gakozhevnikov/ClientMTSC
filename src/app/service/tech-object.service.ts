import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TechObject} from "../model/TechObject";
import {Observable} from "rxjs";

const TECH_OBJECT_URL = 'http://localhost:8080/tech_objects/';

@Injectable({
  providedIn: 'root'
})
export class TechObjectService {

  constructor(private http: HttpClient) { }

  getTechObjects (techObject: TechObject):Observable<any>{
    return this.http.get(TECH_OBJECT_URL);
  }
}
