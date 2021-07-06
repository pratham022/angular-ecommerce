import { Component, OnInit } from '@angular/core';
import { ProductListServiceService } from '../services/product-list-service.service';
import { ProductItem } from '../interfaces/product-item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  productsArr: ProductItem[];
  
  constructor(private productListService: ProductListServiceService) {
    this.productsArr = []
  }

  ngOnInit(): void {
    this.updateProductsList("List updated");
  }

  updateProductsList(message: string) {
    this.productsArr = this.productListService.getProductList();
  }


}
