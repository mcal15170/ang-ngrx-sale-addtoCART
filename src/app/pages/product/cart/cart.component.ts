import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/models/app-state.model";
import { IProduct } from "../../store/models/product.model";
import { ToastrService } from "ngx-toastr";
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
  cartTotalPrice: number;
  cartTotalQty: number;
  diliveryChargeTotleQty: number;
  fixedShppingCharge: number = 80;
  cartWithOutDiscountPayment: number;

  constructor(public store: Store<IAppState>, public toastr: ToastrService) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe((data: any) => {
        this.cart$ = data.sales.cart;
        this.product$ = data.sales.products;
        this.cartTotalPrice = data.sales.cart.reduce(
          (a, { cartPrice }) => a + cartPrice,
          0
        );
        this.cartWithOutDiscountPayment = data.sales.cart.reduce(
          (cartWithOutDiscountPayment, p) =>
            cartWithOutDiscountPayment + p.price * p.cartQty,
          0
        );
        this.cartTotalQty = data.sales.cart.reduce(
          (a, { cartQty }) => a + cartQty,
          0
        );
        this.diliveryChargeTotleQty = data.sales.cart.filter(
          item => item.diliveyCharge === true
        ).length;
      });
  }

  removeCart(id: number, qty: number) {
    this.store.dispatch(new RemoveCartAction(id, qty));
  }

  updateCartQty(id: number, type: string, cartQty: number) {
    const currentCartProductIndex = this.product$.findIndex(
      item => item.id === id
    );
    if (
      (cartQty === 1 && type === "decrese") ||
      (this.product$[currentCartProductIndex].qty === 0 && type === "increse")
    ) {
      if (type === "decrese") {
        document.getElementById("btnDescres" + id).style.display = "none";
        this.toastr.warning(
          "Minimum 1 qty required per cart product!.",
          "Opps!"
        );
      } else {
        document.getElementById("btnIncrese" + id).style.display = "none";
        this.toastr.warning(
          "Current accesible  Product is Out of stock!.",
          "Opps!"
        );
      }
    } else {
      this.store.dispatch(new UpdateCartAction(id, type));
      document.getElementById("btnDescres" + id).style.display =
        "-webkit-inline-box";
      document.getElementById("btnIncrese" + id).style.display =
        "-webkit-inline-box";
    }
  }
}
