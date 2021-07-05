import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../interfaces/product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: ProductItem;
  @Input() isLoggedIn: boolean;
  @Input() isAdmin: boolean;

  constructor() { 

    // initialise the variable
    this.item = {
      _id: '',
      name: '',
      description: '',
      brand: '',
      category: '',
      price: 0,
      countInStock: 0,
      numReviews: 0,
      rating: 0
    }
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  ngOnInit(): void {
  }

}
