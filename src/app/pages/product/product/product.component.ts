import {Component, OnInit} from '@angular/core';
import {MyProductService} from '../product/../my-product.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/models/app-state.model';
import {
  AddProductAction,
  ADDToCartAction,
} from '../../store/actions/product.action';
import {IProduct} from '../../store/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products$: IProduct[];
  totalProduct: number = 0;
  discountRate: number = 5;
  currentFilter: string = 'All';
  filtersValue: any[];
  filters = [
    {value: 'All', viewValue: 'All', icon: 'menu'},
    {
      value: 'MB',
      viewValue: 'Mobile New Launches',
      icon: 'mobile_screen_share',
    },
    {value: 'FA', viewValue: 'Fashion Accessories', icon: 'watch'},
    {value: 'FB', viewValue: 'Furniture Bestsellers', icon: 'hotel'},
    {value: 'FW', viewValue: "Men's Footwear", icon: 'pets'},
    {value: 'HP&SP', viewValue: 'Headphones & Speakers', icon: 'headset'},
    {value: 'KA', viewValue: 'kitchen Accessories', icon: 'kitchen'},
  ];

  constructor(
    private prouctService: MyProductService,
    public store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.filtersValue = this.filters
      .filter(item => item.value !== 'All')
      .map(function(item) {
        return item.value;
      });
    // get products
    this.prouctService.getProducts().subscribe((res: any) => {
      this.store.dispatch(new AddProductAction(res));
      this.store
        .select(state => state)
        .subscribe((data: any) => {
          this.products$ = data.sales.products.filter(
            item => item.active === true && item.price.toFixed(2)
          );
        });
      this.products$;
      this.totalProduct = this.products$.length;
    });
  }

  generalSerach(value: string) {
    console.log(this.filtersValue);
    if (value.length > 0) {
      this.store
        .select(state => state)
        .subscribe((data: any) => {
          this.products$ = data.sales.products.filter(
            data =>
              (data.title.toLowerCase() === value.toLowerCase() ||
                data.title.toLowerCase().startsWith(value.toLowerCase())) &&
              data.active === true &&
              (this.currentFilter !== 'All'
                ? data.category === this.currentFilter
                : data.category ===
                  this.filtersValue.find(filter => filter === data.category))
          );
        });
    } else {
      this.store
        .select(state => state)
        .subscribe((data: any) => {
          this.products$ = data.sales.products.filter(
            item =>
              item.active === true &&
              (this.currentFilter !== 'All'
                ? item.category === this.currentFilter
                : item.category ===
                  this.filtersValue.find(filter => filter === item.category))
          );
        });
    }
    this.totalProduct = this.products$.length;
  }

  applyFilter(event) {
    this.currentFilter = event.value;
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        if (event.value === 'All') {
          this.products$ = data.sales.products.filter(
            item => item.active === true
          );
        } else {
          this.products$ = data.sales.products.filter(
            data => data.category === event.value && data.active === true
          );
        }
      });
    this.totalProduct = this.products$.length;
  }

  genderFilter(event) {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        if (event.value === 'all') {
          this.products$ = data.sales.products.filter(
            data => data.category === this.currentFilter && data.active === true
          );
        } else {
          this.products$ = data.sales.products.filter(
            data =>
              data.category === this.currentFilter &&
              data.productFor === event.value &&
              data.active === true
          );
        }
      });
  }

  priceQualityFilter(filterType: string) {
    this.products$.sort((a, b) => {
      return filterType === 'hight' ? a.price - b.price : b.price - a.price;
    });
  }

  addToCart(product: IProduct) {
    this.store.dispatch(new ADDToCartAction(product));
  }
}
