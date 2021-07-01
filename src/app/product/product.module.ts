import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product/product.component';

import { MatButtonModule } from '@angular/material/button';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent,
  ]
})
export class ProductModule { }
