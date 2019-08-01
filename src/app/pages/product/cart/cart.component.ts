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
  product$: IProduct[];
  txtCartQty: number = 0;
  cartMsg: string = "";

  constructor(public store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        this.cart$ = data.sales.cart;
        this.product$ = data.sales.products;
      });
  }

  removeCart(id: number, qty: number) {
    this.store.dispatch(new RemoveCartAction(id, qty));
  }

  updateCartQty(id: number, type: string, cartQty: number,qty:number) {
    const currentCartProductIndex = this.product$.findIndex(
      item => item.id === id
    );
    if (
      (cartQty === 1 && type === "decrese") ||
      (this.product$[currentCartProductIndex].qty === 0 && type === "increse")
    ) {
      if (type === "decrese") {
        document.getElementById("btnDescres" + id).style.display = "none";
        document.getElementById("cartMsg").innerHTML =
          "Error: Minimum 1 qty required per cart product!";
      } else {
        document.getElementById("btnIncrese" + id).style.display = "none";
        document.getElementById("cartMsg").innerHTML =
          "Error: Current accesible  Product is Out of stock!";
      }
      setTimeout(function() {
        document.getElementById("cartMsg").innerHTML = "";
      }, 3000);
    } else {
      this.store.dispatch(new UpdateCartAction(id, type));
      document.getElementById("btnDescres" + id).style.display =
        "-webkit-inline-box";
      document.getElementById("btnIncrese" + id).style.display =
        "-webkit-inline-box";
    }
  }
}
