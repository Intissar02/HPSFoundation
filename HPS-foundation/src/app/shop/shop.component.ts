import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  
  selectedProducts: Product[] = [];

  constructor(private router: Router) {} 
  

  addToCart(product: Product) {
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts') || '[]');
    selectedProducts.push(product);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    console.log('Products added to local storage:', selectedProducts); 
    this.router.navigate(['/cart']);
  }
  
  goToRegister() {
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
    this.router.navigate(['/register']);
  }
  
  // This method is called when the user wants to proceed to login
  goToLogin() {
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
    this.router.navigate(['/login']);
  }
}
