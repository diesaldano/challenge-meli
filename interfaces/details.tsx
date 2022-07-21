export interface ProductDetail {
  author:       Author;
  item:         Item;
  picture:      Picture[];
  condition:    string;
  freeShipping: boolean;
  sold_quantity: number;
  description:  string;
}

export interface Author {
  name: string;
}

export interface Item {
  id:    string;
  title: string;
  price: Price;
}

export interface Price {
  currency: string;
  amount:   number;
  decimals: number;
}

export interface Picture {
  id:        string;
  url:       string;
  secureURL: string;
  size:      Size;
  maxSize:   MaxSize;
  quality:   string;
}

export enum MaxSize {
  The1200X1102 = "1200x1102",
  The1200X1200 = "1200x1200",
  The1200X899 = "1200x899",
}

export enum Size {
  The500X374 = "500x374",
  The500X459 = "500x459",
  The500X500 = "500x500",
}
