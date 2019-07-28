import { Action } from "@ngrx/store";
import { IProduct } from "../models/product.model";

export enum ProdcutType {
  ADD_PRODUCT = "ADD_PRODUCT",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART = "REMOVE_CART",
  UPDATE_CART = "UPDATE_CART"
}

export class AddProductAction implements Action {
  readonly type = ProdcutType.ADD_PRODUCT;

  constructor(public payload: IProduct[]) {}
}

export class ADDToCartAction implements Action {
  readonly type = ProdcutType.ADD_TO_CART;

  constructor(public payload: IProduct) {}
}

export class RemoveCartAction implements Action {
  readonly type = ProdcutType.REMOVE_CART;

  constructor(public id: number, public cartQty: number) {}
}

export class UpdateCartAction implements Action {
  readonly type = ProdcutType.UPDATE_CART;

  constructor(public payload: number) {}
}

export type ProductAction =
  | AddProductAction
  | ADDToCartAction
  | RemoveCartAction
  | UpdateCartAction;
