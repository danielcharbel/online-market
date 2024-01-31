import dayjs from 'dayjs/esm';

import { IShoppingCart, NewShoppingCart } from './shopping-cart.model';

export const sampleWithRequiredData: IShoppingCart = {
  id: 23038,
  placedDate: dayjs('2024-01-12T15:32'),
  status: 'PENDING',
  totalPrice: 29097.54,
  paymentMethod: 'CREDIT_CARD',
};

export const sampleWithPartialData: IShoppingCart = {
  id: 2795,
  placedDate: dayjs('2024-01-12T20:59'),
  status: 'PENDING',
  totalPrice: 21453.64,
  paymentMethod: 'CREDIT_CARD',
};

export const sampleWithFullData: IShoppingCart = {
  id: 8483,
  placedDate: dayjs('2024-01-13T06:26'),
  status: 'CANCELLED',
  totalPrice: 5901.96,
  paymentMethod: 'IDEAL',
};

export const sampleWithNewData: NewShoppingCart = {
  placedDate: dayjs('2024-01-13T10:17'),
  status: 'PENDING',
  totalPrice: 22986.92,
  paymentMethod: 'IDEAL',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
