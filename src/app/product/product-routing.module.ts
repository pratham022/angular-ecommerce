import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { InventoryComponent } from './inventory/inventory.component';
const productRoutes: Routes = [
    {   path: 'products', component: ProductComponent,
        children: [
            {path: '', component: ProductListComponent},
            {path: 'detail/:id', component: ProductDetailComponent},
        ]
    },

    {
        path: '', redirectTo: '/products', pathMatch: 'full',
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'inventory', component: InventoryComponent
    }

    // We need to add router-outlet to the parent component in order to render the child
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {}