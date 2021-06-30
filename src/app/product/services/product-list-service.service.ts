import { Injectable } from '@angular/core';
import sampleProducts  from '../sampleProducts';
import { ProductItem } from '../interfaces/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor() { }

  getProductList(): ProductItem[] {
    return sampleProducts;
  }

}
