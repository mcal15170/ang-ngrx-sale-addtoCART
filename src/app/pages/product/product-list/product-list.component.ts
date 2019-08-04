import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/models/app-state.model";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "../../store/models/product.model";
import { MyProductService } from "../product/../my-product.service";
import { AddProductAction } from "../../store/actions/product.action";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products$: IProduct[];
  totalProduct: number = 0;
  discountRate: number = 5;
  filters: any[];
  currentCategory: any;
  currentCategoryTitle: string;
  allTags: any = [];
  // all tags
  brand: any = [];
  shape: any = [];
  color: any = [];
  ideal_for: any = [];
  ram: any = [];
  os: any = [];
  offer: any = [];
  network_type: any = [];
  material: any = [];
  wired_type: any = [];
  constructor(
    private route: ActivatedRoute,
    private prouctService: MyProductService,
    public store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.currentCategory = this.route.snapshot.params.type;

    this.prouctService.getProducts().subscribe((res: any) => {
      this.store.dispatch(new AddProductAction(res));
      this.store
        .select(state => state)
        .subscribe((data: any) => {
          this.filters = data.sales.filterData;
          this.currentCategoryTitle = data.sales.filterData
            .filter(item => item.value === this.currentCategory)
            .map(function(item) {
              return item.viewValue;
            });
          this.products$ = data.sales.products.filter(
            item =>
              item.active === true && item.category === this.currentCategory
          );
        });
      this.products$;
      this.totalProduct = this.products$.length;
      // get all filter of current category by product
      this.allTags = this.products$
        .filter((tag, index) => tag.tags.length > 0)
        .map(tag => {
          return tag.tags;
        });

      console.log(this.allTags);

      this.allTags.forEach(element => {
        element.forEach(tag => {
          switch (tag.name) {
            case "brand":
              if (this.brand.includes(tag.value) === false) {
                this.brand.push(tag.value);
              }
              break;
            case "color":
              if (this.color.includes(tag.value) === false) {
                this.color.push(tag.value);
              }
              break;
            case "shape":
              if (this.shape.includes(tag.value) === false) {
                this.shape.push(tag.value);
              }

              break;
            case "ideal_for":
              if (this.ideal_for.includes(tag.value) === false) {
                this.ideal_for.push(tag.value);
              }
              break;
            case "ram":
              if (this.ram.includes(tag.value) === false) {
                this.ram.push(tag.value);
              }
              break;
            case "os":
              if (this.os.includes(tag.value) === false) {
                this.os.push(tag.value);
              }
              break;
            case "network_type":
              if (this.network_type.includes(tag.value) === false) {
                this.network_type.push(tag.value);
              }
              break;
            case "material":
              if (this.material.includes(tag.value) === false) {
                this.material.push(tag.value);
              }
              break;
            case "wired_type":
              if (this.wired_type.includes(tag.value) === false) {
                this.wired_type.push(tag.value);
              }
              break;
            case "offer":
              if (this.offer.includes(tag.value) === false) {
                this.offer.push(tag.value);
              }
              break;
            default:
              console.log("error in filter");
              break;
          }
        });
      });
      console.log(this.color);
    });
  }
}
