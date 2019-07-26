import { IAppState } from "../models/app-state.model";
import { ProductAction, ProdcutType } from "../actions/product.action";

const initialState: IAppState = {
  products: [],
  cart: []
};

export function rootReducer(state: any = initialState, action: ProductAction) {
  let dummyCart;
  let dummyProduct;
  let dummyCartIndex;
  let dummyProductIndex;
  switch (action.type) {
    case ProdcutType.ADD_PRODUCT:
      return {
        products: [...state.products, ...action.payload],
        cart: [...state.cart]
      };

    case ProdcutType.ADD_TO_CART:
      dummyCart = [...state.cart];
      dummyProduct = [...state.products];
      dummyCartIndex = dummyCart.findIndex(
        item => item.id === action.payload.id
      );
      dummyProductIndex = dummyProduct.findIndex(
        item => item.id === action.payload.id
      );

      if (dummyCartIndex < 0) {
        action.payload.cartQty++;
        dummyCart.push(action.payload);
      } else {
        const alredyCart = { ...dummyCart[dummyCartIndex] };
        alredyCart.cartQty++;
        dummyCart[dummyCartIndex] = alredyCart;
      }

      if (dummyProductIndex >= 0) {
        const alreadyProduct = { ...dummyProduct[dummyProductIndex] };
        alreadyProduct.qty--;
        dummyProduct[dummyProductIndex] = alreadyProduct;
      }

      return {
        products: [...dummyProduct],
        cart: [...dummyCart]
      };
    default:
      return state;
  }
}
