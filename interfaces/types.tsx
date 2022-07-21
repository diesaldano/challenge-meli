export interface Product {
  free_shipping: boolean;
  address: any;
  shipping: any;
  thumbnail: string;
  price: string;
  currency_id: string;
  title:        string;
  id:           string;
  author:       Author;
  seller:       Seller;
  categories:   Categories[];
  items:        Item[];
  picture:      string;
  condition:    string;
  freeShipping: string;
  location:     Location;
}

export interface Filters {
  id:     string;
  name:   string;
  type:   string;
  values: Value[];
}

export interface Value {
  id:           string;
  name:         string;
  pathFromRoot: PathFromRoot[];
}

export interface PathFromRoot {
    id:   string;
    name: string;
}



export interface Author {
  name:     string;
  lastname: string;
}

export interface Seller {
  id: any;
  permalink: string;
}

export interface Categories {
  [key: number]: string;
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

export interface Location {
  state: string;
  city:  string;
}