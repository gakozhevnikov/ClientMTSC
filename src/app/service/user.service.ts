import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const USER_URL='http://localhost:8080/user/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById (id:number): Observable<any>{
    return this.http.get(USER_URL+id);
  }

  getCurrentUser(): Observable<any>{
    return this.http.get(USER_URL);
  }

  updateUser(user: any):Observable<any>{
    return this.http.post(USER_URL+'update', user);
  }
}
