import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 28483,
  quantity: 2995,
  totalPrice: 21910.59,
};

export const sampleWithPartialData: IProductOrder = {
  id: 23335,
  quantity: 23369,
  totalPrice: 30795.72,
};

export const sampleWithFullData: IProductOrder = {
  id: 1016,
  quantity: 2633,
  totalPrice: 22161.76,
};

export const sampleWithNewData: NewProductOrder = {
  quantity: 20780,
  totalPrice: 20612.95,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
