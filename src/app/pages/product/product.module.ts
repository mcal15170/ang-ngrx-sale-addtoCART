import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { MyProductService } from './my-product.service';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [ProductComponent, CartComponent],
  providers: [MyProductService]

})
export class ProductModule { }
