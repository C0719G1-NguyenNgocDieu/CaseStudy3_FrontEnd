import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  output: Product[];
  info: Product;

  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }

}
