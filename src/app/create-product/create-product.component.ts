import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Product;
  fg: FormGroup;
  messenge: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.fg = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      image: ['']
    });
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.productService.getById(id).subscribe(next => {
    //     this.product = next;
    //     this.fg.patchValue(this.product);
    //   },
    //   error => {
    //     console.log(error);
    //     this.product = null;
    //   }
    // );
  }

  onSubmit() {
    if (this.fg.valid) {
      const {value} = this.fg;
      const data = {
        ...this.product,
        ...value
      };
      this.productService.createProduct(data).subscribe(next => {
          // this.router.navigate(['/home']);
          this.messenge = 'Create sussessfully';
        },
        error => console.log(error)
      );
    }
  }
}
