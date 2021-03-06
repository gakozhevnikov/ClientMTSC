import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  public login(user): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      userName: user.userName,
      password: user.password
    });
  }
// @ts-ignore
  public register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email: user.email,
      userName: user.userName,
      name: user.name,
      lastName: user.lastName,
      password: user.password,
      confirmPassword: user.confirmPassword
    });
  }
}
