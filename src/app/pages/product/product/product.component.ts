import { Component, OnInit } from "@angular/core";
import { MyProductService } from "../product/../my-product.service";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/models/app-state.model";
import {
  AddProductAction,
  ADDToCartAction
} from "../../store/actions/product.action";
import { IProduct } from "../../store/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products$: IProduct[];
  discountRate: number = 5;
  currentFilter: string = "All";
  filters = [
    { value: "All", viewValue: "All", icon: "menu" },
    {
      value: "MB",
      viewValue: "Mobile New Launches",
      icon: "mobile_screen_share"
    },
    { value: "FA", viewValue: "Fashion Accessories", icon: "watch" },
    { value: "FB", viewValue: "Furniture Bestsellers", icon: "hotel" },
    { value: "FW", viewValue: "Men's Footwear", icon: "pets" },
    { value: "HP&SP", viewValue: "Headphones & Speakers", icon: "headset" },
    { value: "KA", viewValue: "kitchen Accessories", icon: "kitchen" }
  ];

  constructor(
    private prouctService: MyProductService,
    public store: Store<IAppState>
  ) {}

  ngOnInit() {
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
    });
  }

  generalSerach(value: string) {
    if (value.length > 0) {
      this.store
        .select(state => state)
        .subscribe((data: any) => {
          this.products$ = data.sales.products.filter(
            data =>
              (data.title.toLowerCase() === value.toLowerCase() ||
                data.title.toLowerCase().startsWith(value.toLowerCase())) &&
              data.active === true
          );
        });
    } else {
      this.store
        .select(state => state)
        .subscribe((data: any) => {
          this.products$ = data.sales.products.filter(
            item => item.active === true && item.price.toFixed(2)
          );
        });
    }
    // this.store
    //   .select(state => state)
    //   .subscribe((data: any) => {
    //     this.products$ = data.sales.products.filter(
    //       data =>
    //         data.title.toLowerCase() === this.txtSerachKey &&
    //         data.active === true
    //     );
    //   });
  }

  applyFilter(event) {
    this.currentFilter = event.value;
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        if (event.value === "All") {
          this.products$ = data.sales.products.filter(
            item => item.active === true
          );
        } else {
          this.products$ = data.sales.products.filter(
            data => data.category === event.value && data.active === true
          );
        }
      });
  }

  genderFilter(event) {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        if (event.value === "all") {
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
      return filterType === "hight" ? a.price - b.price : b.price - a.price;
    });
  }

  addToCart(product: IProduct) {
    this.store.dispatch(new ADDToCartAction(product));
  }
}
