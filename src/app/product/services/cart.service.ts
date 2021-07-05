import { Injectable } from '@angular/core';
import { ProductItem } from '../interfaces/product-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart() {
    let cart = localStorage.getItem("cart") || '';
    if(cart == '')
      return cart;
    else  
      return JSON.parse(cart);
  }

  setCart(obj: ProductItem[]) {
    localStorage.setItem("cart", JSON.stringify(obj));
  }

  updateCart(cartItem: any) {
    let currentCart: any = this.getCart();
    if(currentCart == '') {
      // cart not found in local storage
      let newCart = [];
      newCart.push(cartItem);
      this.setCart(newCart);

    }
    else {
      // some cart is already there in the local storage
      let ind = cartItem['_id'];
      console.log("id: "+ind);

      // search for cartItem in currentcart
      let i2 = -1;
      for(let i=0; i<currentCart.length; i++) {
        let item = currentCart[i];
        if(item['_id'] == ind) {
          // item found
          i2 = i;
          break;
        }
      }
      if(i2 == -1) {
        // cart item not found in current cart
        currentCart.push(cartItem);
      }
      else {
        currentCart[i2] = cartItem;
      }
      this.setCart(currentCart);

    }
  }

  updateCartForZero(cartItem: any) {
    let currentCart = this.getCart();
    if(currentCart == '') {
      // cart not there in local storage
    }
    else {
        // some cart is already there in the local storage
        let ind = cartItem['_id'];
        console.log("id: "+ind);
  
        // search for cartItem in currentcart
        let i2 = -1;
        for(let i=0; i<currentCart.length; i++) {
          let item = currentCart[i];
          if(item['_id'] == ind) {
            // item found
            i2 = i;
            break;
          }
        }
        if(i2 == -1) {
          // cart item not found in current cart
          // and the user selected 0, so don't do anything
        }
        else {
          // cart item is there in current cart and user has selected 0,
          // so, user wants to deselect the item
          currentCart.splice(i2, 1);
        }
        this.setCart(currentCart);

    }
  }

  getCartItemCount(cartItem: any) {
    let jsonStr = localStorage.getItem("cart") || '';
    if(jsonStr == '')
      return 0;
    else {
      let currentCart = JSON.parse(jsonStr);

      let ind = cartItem['_id'];
      console.log("id: "+ind);

      // search for cartItem in currentcart
      let i2 = -1;
      for(let i=0; i<currentCart.length; i++) {
        let item = currentCart[i];
        if(item['_id'] == ind) {
          // item found
          i2 = i;
          break;
        }
      }
      if(i2 == -1) {
        // cart item not found in current cart
        // and the user selected 0, so don't do anything
        return 0;
      }
      else {
        // cart item is there in current cart and user has selected 0,
        // so, user wants to deselect the item
        return currentCart[i2].countInStock;
      }

    }
  }
}
