import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SharedService } from './shared.service';
import { User, LoggedOutUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login_user(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  private baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient, public shServ: SharedService) {}

  register(email: string, password: string): Observable<any> {
    const requestBody = { email, password };
    
    return this.http.post<any>(this.baseurl + `/user/register/`, requestBody);
  }

  login(formData  : any): Observable<any> {
    console.log(formData.value)
    return this.http.post<any>(this.baseurl + `/user/login/`, formData);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.shServ.currentUserSubject.next(LoggedOutUser);
  }
}
