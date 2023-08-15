// copyRib(): void {
  //   const ribInput = document.getElementById("rib") as HTMLInputElement;
  //   ribInput.select();
  //   document.execCommand("copy");
  //   document.getElementById("copyStatus")!.innerText = "Copied";
  // }
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { DonationService } from '../services/donation.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-donate',
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.css']
  })
  export class DonateComponent implements OnInit {
    donationInfo = { email: '', gender: '' }; // Initialize the Donation Info object
    errorMessage: string = '';
    successMessage: string = '';

  
    constructor(private donationService: DonationService, private router: Router) { }

  
    ngOnInit(): void { }

  
  
    // onSubmit(dataForm:any){
    //   this.donationService.donate(dataForm = 'emailValue', 'genderValue').subscribe(

    //     response => {
    //       // Call onLoginSuccess method after successful login
    //       this.successMessage = response.message;
          
    //     },
    //     err => {                       //handling the error
    //       let errStr = '';
    //       console.log('Error:', err.error);

    //       errStr = (err.error.email) ? err.error.email : 'An error occurred during donation.';
    //       alert('Error: ' + errStr);
    //     }
    //   );
    // }
  
    onSubmit(dataForm: any) {
      this.donationService.donate(dataForm.email, dataForm.gender).subscribe(
        response => {
          this.successMessage = response.message;
        },
        err => {                       
          let errStr = '';
          console.log('Error:', err.error);
    
          errStr = (err.error.email) ? err.error.email : 'An error occurred during donation.';
          alert('Error: ' + errStr);
        }
      );
    }
    
  }
  