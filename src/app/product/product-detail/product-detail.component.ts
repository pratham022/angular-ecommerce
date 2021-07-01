import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListServiceService } from '../services/product-list-service.service';
import { ProductItem } from '../interfaces/product-item';
import { Subscription } from 'rxjs';

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


  constructor(private route: ActivatedRoute, 
              private _productListService: ProductListServiceService
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
    }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      let products = this._productListService.getProductList();
      this.product = products.find(p => p._id == this.id) || this.dummyProduct;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
