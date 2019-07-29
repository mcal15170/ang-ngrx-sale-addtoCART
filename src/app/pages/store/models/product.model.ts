export interface IProduct {
  id: number;
  title: string;
  desc: string;
  price: number;
  qty: number;
  img: string;
  active: boolean;
  category: string;
  cartQty: number;
  cartPrice: number;
  productFor: number;
}
