import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductItem } from '../interfaces/product-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: ProductItem[];
  isEmpty: boolean;
  totalCost: number;
  constructor(private cartService: CartService) { 
    this.cart = []
    this.isEmpty = false;
    this.totalCost = 0;
  }

  ngOnInit(): void {
    let jsonObj = this.cartService.getCart();
    if(jsonObj === '')
      this.isEmpty = true
    else
      this.cart = jsonObj
    
      this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    if(!this.isEmpty) {
      for(let item of this.cart) {
        this.totalCost += ( item.price * item.countInStock );
      }
    }
  }

}
