import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../interfaces/product-item';
import { ProductListServiceService } from '../services/product-list-service.service';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsArr: ProductItem[];

  constructor(private productListService: ProductListServiceService) {
    this.productsArr = [];
  }

  ngOnInit(): void {
    this.productsArr = this.productListService.getProductList();
  }

}
