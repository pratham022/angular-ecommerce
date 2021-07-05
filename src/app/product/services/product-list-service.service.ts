import { Injectable } from '@angular/core';
import sampleProducts  from '../sampleProducts';
import { ProductItem } from '../interfaces/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor() { }

  getProductList(): ProductItem[] {
    let obj = localStorage.getItem("products") || '';
    if(obj == '') {
      console.log("Setting products for 1st time");
      localStorage.setItem("products", JSON.stringify(sampleProducts));
      return sampleProducts;
    }
    else  
      return JSON.parse(obj);
  }

  updateProducts(remainingCnt: number, cartItem: any) {
    let obj = this.getProductList();

    let ind = cartItem['_id'];
    // find the index
    let i2 = 0;
    for(let i=0; i<obj.length; i++) {
      let item = obj[i];
      if(item['_id'] == ind) {
        // item found
        i2 = i;
        break;
      }
    }
    
    obj[i2].countInStock = remainingCnt;
    localStorage.setItem("products", JSON.stringify(obj));
  }

}
