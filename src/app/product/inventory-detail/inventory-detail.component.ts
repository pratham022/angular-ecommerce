import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../interfaces/product-item';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  @Input() product: ProductItem;
  price: number;
  countInStock: number;
  @Output() updateList = new EventEmitter();
  constructor(private inventoryService: InventoryService) {
        // initialise the variable
        this.product = {
          _id: '',
          name: '',
          description: '',
          brand: '',
          category: '',
          price: 0,
          countInStock: 0,
          numReviews: 0,
          rating: 0
        }
        this.price = 0;
        this.countInStock = 0;
  }

  ngOnInit(): void {
    console.log("heree ",  this.product)
    this.price = this.product.price;
    this.countInStock = this.product.countInStock;
  }

  saveProduct() {
    let updatedObj = this.product;
    updatedObj.countInStock = this.countInStock;
    updatedObj.price = this.price;
    this.inventoryService.updateProduct(updatedObj);
    this.updateList.emit("list updated");
  }
  deleteProduct() {
    this.inventoryService.deleteProduct(this.product);
    this.updateList.emit("list updated");
  }

}
