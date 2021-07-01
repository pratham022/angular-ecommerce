import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
