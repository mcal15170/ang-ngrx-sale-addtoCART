import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/models/app-state.model';
import { IProduct } from '../../store/models/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
})
export class ProductCarouselComponent implements OnInit {
  products$: IProduct[];

  constructor(public store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        this.products$ = data.sales.products;
      });
      
  }
}
