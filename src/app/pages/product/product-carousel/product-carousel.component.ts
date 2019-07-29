import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/models/app-state.model';
import {IProduct} from '../../store/models/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
})
export class ProductCarouselComponent implements OnInit {
  products$: IProduct[];
  slides: any = [[]];
  productPerSection: number = 3;
  boostrapDiv: number = 12 / this.productPerSection;

  constructor(public store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        this.products$ = data.sales.products.slice(10, 22);
        if (this.products$.length > 0) {
          this.slides = this.chunk(this.products$, this.productPerSection);
          console.log(this.slides);
        }
      });
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}
