import { IProduct } from "./product.model";

export interface IAppState {
  readonly products: IProduct[];
  readonly cart: IProduct[];
  readonly filterData: any[];
}
