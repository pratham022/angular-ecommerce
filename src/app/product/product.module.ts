import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product/product.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { from } from 'rxjs';
import { ProductListServiceService } from './services/product-list-service.service';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductComponent,
    CartComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ProductRoutingModule,
    MatIconModule
  ],
  exports: [
    ProductComponent,
  ],
  providers: [
    ProductListServiceService
  ]
})
export class ProductModule { }
