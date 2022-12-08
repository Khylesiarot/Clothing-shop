import { Product } from "../../models/Product";

export enum ShopActionType {
    ADDTOCART = 'add',
    REMOVEFROMCART = 'remove',
    UPDATETOTALAMOUNT = 'update',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADDTOCART,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVEFROMCART,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATETOTALAMOUNT,
    payload: total,
  });