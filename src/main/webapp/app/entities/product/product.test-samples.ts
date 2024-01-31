import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 32310,
  name: 'elliptical meh',
  price: 5977.32,
  productSize: 'XL',
};

export const sampleWithPartialData: IProduct = {
  id: 6127,
  name: 'strudel after',
  description: 'summarise easily align',
  price: 24919.07,
  productSize: 'S',
};

export const sampleWithFullData: IProduct = {
  id: 15426,
  name: 'crooked',
  description: 'patiently',
  price: 15802.79,
  productSize: 'XL',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'fussy vanilla',
  price: 21357.74,
  productSize: 'L',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
