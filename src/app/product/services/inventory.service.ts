import { Injectable } from '@angular/core';
import { ProductItem } from '../interfaces/product-item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { 

  }

  getAllProducts() {
    // get all products
    let allProducts = localStorage.getItem("products") || '';
    if(allProducts == '')
      return allProducts;
    else  {
      return JSON.parse(allProducts);
    } 
  }

  setAllProducts(allProducts: ProductItem[]) {
    localStorage.setItem("products", JSON.stringify(allProducts));
  }
  updateProduct(obj: ProductItem) {
    let allProducts = this.getAllProducts();
    if(allProducts != '') {

      let i2 = 0;
      for(let i=0; i<allProducts.length; i++) {
        let currObj = allProducts[i];
        if(currObj['_id'] == obj['_id']) {
          i2 = i;
          break;
        }
      }

      allProducts[i2] = obj;
    }
    this.setAllProducts(allProducts);
  }

  deleteProduct(obj: ProductItem) {
    console.log("In delete product");
    let allProducts = this.getAllProducts();
    if(allProducts != '') {

      let i2 = 0;
      for(let i=0; i<allProducts.length; i++) {
        let currObj = allProducts[i];
        if(currObj['_id'] == obj['_id']) {
          i2 = i;
          break;
        }
      }

      allProducts.splice(i2, 1);
    }
    this.setAllProducts(allProducts);
  }
}
