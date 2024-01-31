import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 26137,
  name: 'wakeboard at',
};

export const sampleWithPartialData: IProductCategory = {
  id: 17880,
  name: 'rouge alongside print',
};

export const sampleWithFullData: IProductCategory = {
  id: 22033,
  name: 'um',
  description: 'so',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'heartbeat aside',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
