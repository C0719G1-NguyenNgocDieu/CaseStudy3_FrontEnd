import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {DetailProductComponent} from './detail-product/detail-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';


const routes: Routes = [{
  path: 'home',
  component: ProductComponent
},
  {
    path: 'add',
    component: CreateProductComponent
  },
  {
    path: 'home/:id',
    component: DetailProductComponent
  },
  {
    path: 'home/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'home/delete/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
