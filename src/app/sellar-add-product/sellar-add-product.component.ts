import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sellar-add-product',
  templateUrl: './sellar-add-product.component.html',
  styleUrl: './sellar-add-product.component.css'
})
export class SellarAddProductComponent {
  productMessage: string = '';

  constructor(private productService: ProductService) {

  }

  addProduct(data: any) {
    this.productService.addProduct(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.productMessage = 'Product is added'

      }
    })
  }

}
