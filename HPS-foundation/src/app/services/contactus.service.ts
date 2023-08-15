import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ContactusService {
  private baseUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient, public shServ: SharedService) {}

  submitContactForm(formData: any) {
    return this.http.post(`${this.baseUrl}/api/contactus/`, formData);
  }
}
