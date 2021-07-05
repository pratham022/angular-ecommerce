import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../interfaces/product-item';
import { ProductListServiceService } from '../services/product-list-service.service'; 
import { CheckUserLoginService } from '../services/check-user-login.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsArr: ProductItem[];
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(private productListService: ProductListServiceService, 
                private checkUserLoginService: CheckUserLoginService) {
    this.productsArr = [];
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  ngOnInit(): void {
    this.productsArr = this.productListService.getProductList();
    this.isLoggedIn = this.checkUserLoginService.isLoggedIn();
    this.isAdmin = this.checkUserLoginService.isAdminUser();
    console.log(this.isLoggedIn, this.isAdmin);

  }

}
