import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/models/app-state.model";
import { IProduct } from "../../store/models/product.model";
import {
  RemoveCartAction,
  UpdateCartAction
} from "../../store/actions/product.action";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart$: IProduct[];
  txtCartQty: number = 0;

  constructor(public store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        this.cart$ = data.sales.cart;
      });
  }

  removeCart(id: number, qty: number) {
    this.store.dispatch(new RemoveCartAction(id, qty));
  }

  updateCartQty(id: number, type: string, cartQty: number) {
    console.log(id, type, cartQty);

    this.store.dispatch(new UpdateCartAction(id, type));

    if (cartQty < 2 || cartQty === 1) {
      document.getElementById("btnDescres" + id).style.display = "none";
    } else {
      document.getElementById("btnDescres" + id).style.display =
        "-webkit-inline-box";
    }
  }
}
