import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductListServiceService } from '../services/product-list-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() obj: any;

  // custom event update the remaining items of product array
  @Output() update = new EventEmitter();

  maxCount: number;
  curr: number;
  totalCnt: number;
  constructor(private cartService: CartService, private productListService: ProductListServiceService) {
    this.obj = {}
    this.maxCount = 0;
    this.curr = 0;
    this.totalCnt = 0;
  }

  ngOnInit(): void {
    this.maxCount = this.obj.countInStock;
    this.totalCnt = this.maxCount;
    this.curr = this.cartService.getCartItemCount(this.obj);
    console.log(this.curr + " " + this.maxCount);
  }

  incrementItem() {
    if(this.curr + 1 <= this.curr + this.maxCount) {
      this.curr += 1;
      this.maxCount -= 1;
    }
    console.log(this.curr + " " + this.maxCount);
  }
  decrementItem() {
    if(this.curr - 1 >= 0) {
      this.curr -= 1;
      this.maxCount += 1;
    }
    console.log(this.curr + " " + this.maxCount);
  }

  updateCart() {
    if(this.curr > 0) {
      // user has selected atleast one item
      let cartItem = this.obj;
      cartItem.countInStock = this.curr;

      // update the cart in local storage
      this.cartService.updateCart(cartItem);

      // update products array in local storage
      let remainingCnt = this.maxCount;
      this.productListService.updateProducts(remainingCnt, cartItem);

      this.update.emit(remainingCnt);

    }
    else {
      let cartItem = this.obj;
      cartItem.countInStock = this.curr;

      // update the cart in local storage
      this.cartService.updateCartForZero(cartItem);

      // update products array in local storage
      let remainingCnt = this.maxCount;
      this.productListService.updateProducts(remainingCnt, cartItem);

      this.update.emit(remainingCnt);
    }
  }

}
