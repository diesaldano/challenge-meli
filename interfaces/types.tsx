export interface Product {
  id:                  string;
  siteID:              string;
  title:               string;
  seller:              Seller;
  price:               number;
  prices:              Prices;
  salePrice:           null;
  currencyID:          string;
  availableQuantity:   number;
  soldQuantity:        number;
  buyingMode:          string;
  listingTypeID:       string;
  stopTime:            Date;
  condition:           string;
  permalink:           string;
  thumbnail:           string;
  thumbnailID:         string;
  acceptsMercadopago:  boolean;
  installments:        Installments;
  address:             Address;
  shipping:            Shipping;
  sellerAddress:       SellerAddress;
  attributes:          Attribute[];
  differentialPricing: DifferentialPricing;
  originalPrice:       number;
  categoryID:          string;
  officialStoreID:     number;
  domainID:            string;
  catalogProductID:    string;
  tags:                string[];
  catalogListing:      boolean;
  useThumbnailID:      boolean;
  offerScore:          null;
  offerShare:          null;
  matchScore:          null;
  winnerItemID:        null;
  melicoin:            null;
  discounts:           null;
  orderBackend:        number;
}

export interface Address {
  stateID:   string;
  stateName: string;
  cityID:    null;
  cityName:  string;
}

export interface Attribute {
  id:                 string;
  name:               string;
  valueID:            null | string;
  valueStruct:        Struct | null;
  attributeGroupName: string;
  source:             number;
  valueName:          null | string;
  values:             Value[];
  attributeGroupID:   string;
}

export interface Struct {
  unit:   string;
  number: number;
}

export interface Value {
  id:     null | string;
  name:   null | string;
  struct: Struct | null;
  source: number;
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity:   number;
  amount:     number;
  rate:       number;
  currencyID: string;
}

export interface Prices {
  id:                  string;
  prices:              Price[];
  presentation:        Presentation;
  paymentMethodPrices: any[];
  referencePrices:     any[];
  purchaseDiscounts:   any[];
}

export interface Presentation {
  displayCurrency: string;
}

export interface Price {
  id:                  string;
  type:                string;
  amount:              number;
  regularAmount:       number | null;
  currencyID:          string;
  lastUpdated:         Date;
  conditions:          Conditions;
  exchangeRateContext: string;
  metadata:            Metadata;
}

export interface Conditions {
  contextRestrictions: string[];
  startTime:           Date | null;
  endTime:             Date | null;
  eligible:            boolean;
}

export interface Metadata {
  campaignID?:                 string;
  promotionID?:                string;
  promotionType?:              string;
  discountMeliAmount?:         number;
  campaignDiscountPercentage?: number;
  campaignEndDate?:            Date;
  orderItemPrice?:             number;
  fundingMode?:                string;
}

export interface Seller {
  id:               number;
  permalink:        string;
  registrationDate: Date;
  carDealer:        boolean;
  realEstateAgency: boolean;
  tags:             string[];
  sellerReputation: SellerReputation;
}

export interface SellerReputation {
  powerSellerStatus: null;
  levelID:           string;
  metrics:           Metrics;
  transactions:      Transactions;
}

export interface Metrics {
  cancellations:       Cancellations;
  claims:              Cancellations;
  delayedHandlingTime: Cancellations;
  sales:               Sales;
}

export interface Cancellations {
  period: string;
  rate:   number;
  value:  number;
}

export interface Sales {
  period:    string;
  completed: number;
}

export interface Transactions {
  canceled:  number;
  period:    string;
  total:     number;
  ratings:   Ratings;
  completed: number;
}

export interface Ratings {
  negative: number;
  neutral:  number;
  positive: number;
}

export interface SellerAddress {
  id:          string;
  comment:     string;
  addressLine: string;
  zipCode:     string;
  country:     City;
  state:       City;
  city:        City;
  latitude:    string;
  longitude:   string;
}

export interface City {
  id:   null | string;
  name: string;
}

export interface Shipping {
  freeShipping: boolean;
  mode:         string;
  tags:         string[];
  logisticType: string;
  storePickUp:  boolean;
}