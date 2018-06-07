import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule} from '@angular/router';
import { ProductsGuardService } from './products-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing/product-routing.module';
@NgModule({
  imports: [
   ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent, ProductDetailComponent],
    
  providers: [
    ProductService,
    ProductsGuardService
  ]  
})
export class ProductModule { }
