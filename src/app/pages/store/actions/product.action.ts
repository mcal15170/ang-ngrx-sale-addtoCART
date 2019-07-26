import { Action } from '@ngrx/store';
import { IProduct } from '../models/product.model';

export enum ProdcutType {
    ADD_PRODUCT = 'ADD_PRODUCT',
    ADD_TO_CART = 'ADD_TO_CART'
}


export class AddProductAction implements Action {
    readonly type = ProdcutType.ADD_PRODUCT

    constructor(public payload: IProduct[]) { }
}

export class ADDToCartAction implements Action {
    readonly type = ProdcutType.ADD_TO_CART

    constructor(public payload: IProduct) { }
}

export type ProductAction = AddProductAction | ADDToCartAction;

