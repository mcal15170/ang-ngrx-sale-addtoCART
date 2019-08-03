import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {MyProductService} from './my-product.service';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {ProductAdvetisementComponent} from './product-advetisement/product-advetisement.component';
import {ProductBannerComponent} from './product-banner/product-banner.component';
import {ToastrModule} from 'ngx-toastr';
import { ProductOfferComponent } from './product-offer/product-offer.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      tapToDismiss: false,
      closeButton: true,
    }),
  ],
  declarations: [
    ProductComponent,
    CartComponent,
    ProductCarouselComponent,
    ProductAdvetisementComponent,
    ProductBannerComponent,
    ProductOfferComponent,
  ],
  providers: [MyProductService],
})
export class ProductModule {}
