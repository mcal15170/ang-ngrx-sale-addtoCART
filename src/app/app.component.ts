import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "./pages/store/models/app-state.model";
import { AddFilterAction } from "./pages/store/actions/product.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ang-agrx-sales";
  filters = [
    { value: "All", viewValue: "All", icon: "menu" },
    {
      value: "MB",
      viewValue: "Mobile New Launches",
      icon: "mobile_screen_share"
    },
    { value: "FA", viewValue: "Fashion Accessories", icon: "watch" },
    { value: "FB", viewValue: "Furniture Bestsellers", icon: "hotel" },
    { value: "FW", viewValue: "Footwear", icon: "pets" },
    { value: "HP&SP", viewValue: "Headphones & Speakers", icon: "headset" },
    { value: "KA", viewValue: "kitchen Accessories", icon: "kitchen" }
  ];

  constructor(public store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new AddFilterAction(this.filters));
  }
}
