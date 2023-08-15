import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user'; // Adjust the import path as needed
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User(); // Initialize the User object
  errorMessage: string = '';

  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  onRegister(registerForm: { valid: any; }) {
    if (registerForm.valid) {
      console.log(this.user.email + ' ' + this.user.password);

      this.authServ.register(this.user.email, this.user.password).subscribe(
        response => {
          alert('Registration successful for email: ' + this.user.email);
          //redirection to login
          this.router.navigate(['login']);
          this.loginAfterRegistration();
        },
        err => {
          let errStr = '';
          console.log('Error:', err.error);

          errStr = (err.error.email) ? err.error.email : 'An error occurred during registration.';
          alert('Error: ' + errStr);
        }
      );
    }
  }

  loginAfterRegistration() {
    /*this.authServ.login(this.user.email, this.user.password).subscribe(
      () => {
        // Handle successful login after registration
        alert('Registration and Login successful for email: ' + this.user.email);
  
        this.router.navigate(['shop']); // Navigate to the shop page
      },
      (error) => {
        // Handle login error after registration
        console.error('Login error after registration:', error);
      }
    );*/
  }
  
  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }
}  