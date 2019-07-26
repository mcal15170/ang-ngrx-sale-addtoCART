import { IAppState } from '../models/app-state.model';
import { ProductAction, ProdcutType } from '../actions/product.action';

const initialState: IAppState = {
    products: [],
    cart: []
}

export function rootReducer(state: any = initialState, action: ProductAction) {
    switch (action.type) {
        case ProdcutType.ADD_PRODUCT:
            return {
                products: [...state.products, ...action.payload],
                cart: [...state.cart]
            }

        case ProdcutType.ADD_TO_CART:
            return state;
        default:
            return state;
    }

}