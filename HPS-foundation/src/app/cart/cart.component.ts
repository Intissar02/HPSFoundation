import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  description: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  selectedProducts: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    const productsQueryParam = this.route.snapshot.queryParamMap.get('products');
    if (productsQueryParam) {
      this.selectedProducts = JSON.parse(productsQueryParam);
    }
  }
}
