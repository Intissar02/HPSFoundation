import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
    login_user(email: string, gender: string) {
      throw new Error('Method not implemented.');
    }
  private baseurl = 'http://localhost:8000'; // Your backend API URL

  constructor(private http: HttpClient, public shServ: SharedService) { }

  donate(email: string, gender: string): Observable<any> {
    const requestBody = { email, gender };
    return this.http.post<any>(this.baseurl + `/donate/`, requestBody);
  }
  
    // const endpoint = `${this.baseurl}/donation/`; 
    // return this.http.post(endpoint, formData);
  }



