import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user'; // Adjust the import path as needed
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = {email: '', password: ''};// Initialize the User object

  errorMessage: string = '';

  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  /*onLogin(loginForm: { valid: any; }) {
    if (loginForm.valid) {
      console.log(this.user.email + ' ' + this.user.password);

      this.authServ.login(this.user.email, this.user.password).subscribe(
        response => {
          alert('Login successful for email: ' + this.user.email); //handling the login
          this.router.navigate(['shop']);
        },
        err => {                       //handling the error
          let errStr = '';
          console.log('Error:', err.error);

          errStr = (err.error.email) ? err.error.email : 'An error occurred during Login.';
          alert('Error: ' + errStr);
        }
      );
    }
  }*/
  onLogin(dataForm:any){
      this.authServ.login(dataForm).subscribe(


        response => {
          // Call onLoginSuccess method after successful login
          this.onLoginSuccess();
          
        },
        
        err => {                       //handling the error
          let errStr = '';
          console.log('Error:', err.error);

          errStr = (err.error.email) ? err.error.email : 'An error occurred during Login.';
          alert('Error: ' + errStr);
        }
      );
    }
   
onLoginSuccess() {
  // Retrieve selected products from local storage
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts') || '[]');

  // Redirect to the detail page of the first selected product (if available)
  if (selectedProducts.length > 0) {
    const firstProduct = selectedProducts[0];
    const productDescription = firstProduct.description;
    this.router.navigate(['/product', productDescription]); // Modify the route according to your setup
  } else {
    this.router.navigate(['/cart']); // Redirect to cart if no products are selected
  }
}

  }
  
//
// Login component
// ngOnInit() {
//   const selectedProductsStr = localStorage.getItem('selectedProducts');
//   if (selectedProductsStr) {
//     this.router.navigate(['cart']);
//   }
// }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

