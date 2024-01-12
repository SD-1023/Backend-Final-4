export interface IUser {
  uid?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  type?: string;
}

export interface IAdmin {
  admin_uid: string | number;
}

export interface INormal_user {
  normal_uid: string | number;
  DOB?: Date | string;
  age?: number;
  phone_number?: number;
  image_id?: IImage;
}

export interface IImage {
  image_id?: number;
  name: string;
  url: string;
  type?: boolean;
  normal_uid?:string;
  brand_id?: number;
  category_id?: number;
  product_id?:number;

}

export interface IBrand {
  brand_id?: number;
  name: string;
  image_id: IImage;
  products?: object[];
  discount_id?: number
}

export interface ICategory {
  category_id?: number;
  name: string;
  image_id: IImage;
  user_id?: string;
  brand_id?: number;
  product_id?: number;
  products?: object[];
  discount_id?: number
}

export interface IDiscount {
  discount_id?: number;
  values: number;
  type?: string;
  categories?: object[];
  brands?: object[];
}

export interface IRating {
  rating_id?: number;
  user_id: string;
  values: number;
  product_id: number;
}

export interface IAddress {
  address_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  location: string;
  phone_number: number;
  orders?: object[];
}

export interface IProduct {
  product_id?: number;
  name: string;
  sub_title?: string;
  description?: string;
  category_id?: number;
  quantity: number;
  brand_id?: number;
  price: number;
  image: object[];
  created_at: string;
  rating?: object[];
  Order_item?: object[];
  discount?: object[];
  wishlist?: object[];
}

export interface IOrder {
  order_id?: number;
  normal_uid: string;
  total_price: number;
  status: number;
  payment_status: boolean;
  payment_type: string;
  address_id: number;
  items: object[];
}

export interface IOrder_item {
  order_item_id?: number;
  normal_uid: string;
  product_id: number;
  quantity: number;
  item_price: number;
  order_id: number;
}

export interface IWishlist {
  wishlist_id?: number;
  normal_uid: string;
  // product_id: number;
}
