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
        action.payload.cartPrice =
          action.payload.cartPrice +
          (action.payload.discount
            ? action.payload.price - (action.payload.price * 5) / 100
            : action.payload.price);
        dummyCart.push(action.payload);
      } else {
        const alredyCart = { ...dummyCart[dummyCartIndex] };
        if (dummyProduct[dummyProductIndex].qty > 0) {
          alredyCart.cartQty++;
          alredyCart.cartPrice =
            alredyCart.cartPrice +
            (alredyCart.discount
              ? alredyCart.price - (alredyCart.price * 5) / 100
              : alredyCart.price);
        }
        dummyCart[dummyCartIndex] = alredyCart;
      }

      if (dummyProductIndex >= 0) {
        const alreadyProduct = { ...dummyProduct[dummyProductIndex] };
        if (alreadyProduct.qty > 0) {
          alreadyProduct.qty--;
        }

        dummyProduct[dummyProductIndex] = alreadyProduct;
      }

      return {
        products: [...dummyProduct],
        cart: [...dummyCart]
      };

    case ProdcutType.REMOVE_CART:
      dummyCart = [...state.cart];
      dummyProduct = [...state.products];
      dummyCartIndex = dummyCart.findIndex(item => item.id === action.id);
      dummyProductIndex = dummyProduct.findIndex(item => item.id === action.id);

      if (dummyCartIndex >= 0) {
        dummyCart.splice(dummyCartIndex, 1);
      }

      if (dummyProductIndex >= 0) {
        dummyProduct[dummyProductIndex].qty =
          dummyProduct[dummyProductIndex].qty + action.cartQty;
        dummyProduct[dummyProductIndex].cartQty =
          dummyProduct[dummyProductIndex].cartQty + action.cartQty;
      }
      return {
        products: [...dummyProduct],
        cart: [...dummyCart]
      };

    case ProdcutType.UPDATE_CART:
      dummyCart = [...state.cart];
      dummyProduct = [...state.products];
      dummyCartIndex = dummyCart.findIndex(item => item.id === action.id);
      dummyProductIndex = dummyProduct.findIndex(item => item.id === action.id);

      if (dummyCartIndex >= 0) {
        if (action.qtyType === "increse") {
          if (dummyProduct[dummyProductIndex].qty > 0) {
            dummyCart[dummyCartIndex].cartQty++;
            dummyCart[dummyCartIndex].cartPrice =
              dummyCart[dummyCartIndex].cartPrice +
              dummyProduct[dummyProductIndex].price;
          }
        } else {
          dummyCart[dummyCartIndex].cartQty--;
          dummyCart[dummyCartIndex].cartPrice =
            dummyCart[dummyCartIndex].cartPrice -
            dummyProduct[dummyProductIndex].price;
        }
      }

      if (dummyProductIndex >= 0) {
        if (action.qtyType === "increse") {
          if (dummyProduct[dummyProductIndex].qty > 0) {
            dummyProduct[dummyProductIndex].qty--;
          }
        } else {
          dummyProduct[dummyProductIndex].qty++;
        }
      }
      return {
        products: [...dummyProduct],
        cart: [...dummyCart]
      };

    default:
      return state;
  }
}
