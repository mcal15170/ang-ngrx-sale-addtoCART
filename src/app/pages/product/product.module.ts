import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { MyProductService } from "./my-product.service";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from '@angular/forms';
import { ProductCarouselComponent } from "./product-carousel/product-carousel.component";
import { ProductAdvetisementComponent } from "./product-advetisement/product-advetisement.component";
import { ProductBannerComponent } from "./product-banner/product-banner.component";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule
  ],
  declarations: [
    ProductComponent,
    CartComponent,
    ProductCarouselComponent,
    ProductAdvetisementComponent,
    ProductBannerComponent
  ],
  providers: [MyProductService]
})
export class ProductModule {}
