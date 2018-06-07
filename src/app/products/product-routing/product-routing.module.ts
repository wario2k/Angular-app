import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from '../product-list.component';
import { ProductDetailComponent } from '../product-detail.component';
import { ProductsGuardService } from '../products-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path : 'products', component : ProductListComponent},
      { path : 'products/:id',
      canActivate:[ProductsGuardService] ,
      component : ProductDetailComponent}
  ])
],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
