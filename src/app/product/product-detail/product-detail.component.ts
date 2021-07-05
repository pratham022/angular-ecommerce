import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListServiceService } from '../services/product-list-service.service';
import { ProductItem } from '../interfaces/product-item';
import { Subscription } from 'rxjs';
import { CheckUserLoginService } from '../services/check-user-login.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product: ProductItem;
  dummyProduct: ProductItem;
  sub: any;

  cntInStock: number;

  isLoggedIn: boolean;
  isAdmin: boolean;


  constructor(private route: ActivatedRoute, 
              private _productListService: ProductListServiceService,
              private checkUserLoginService: CheckUserLoginService
    ) {
        this.id = '';
        this.product = {
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
        this.dummyProduct = this.product;
        this.cntInStock = 0;
        this.isLoggedIn = false;
        this.isAdmin = false;
    }

  ngOnInit(): void {
    console.log("Detail component mounted again");
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      let products = this._productListService.getProductList();
      this.product = products.find(p => p._id == this.id) || this.dummyProduct;
      this.cntInStock = this.product.countInStock;
      this.isLoggedIn = this.checkUserLoginService.isLoggedIn();
      this.isAdmin = this.checkUserLoginService.isAdminUser();
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setNewDetails(newVal: number) {
    console.log("New value: ", newVal);
    this.cntInStock = newVal;
  }
}
