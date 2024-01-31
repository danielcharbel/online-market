import { ICustomerDetails, NewCustomerDetails } from './customer-details.model';

export const sampleWithRequiredData: ICustomerDetails = {
  id: 32747,
  gender: 'OTHER',
  phone: '598-216-6823 x7293',
  addressLine1: 'successfully',
  city: 'South Miguel',
  country: 'Heard Island and McDonald Islands',
};

export const sampleWithPartialData: ICustomerDetails = {
  id: 6082,
  gender: 'MALE',
  phone: '(561) 241-2622',
  addressLine1: 'pro course naive',
  city: 'East Annamae',
  country: 'Kuwait',
};

export const sampleWithFullData: ICustomerDetails = {
  id: 18150,
  gender: 'FEMALE',
  phone: '(844) 296-6063',
  addressLine1: 'immaterial',
  addressLine2: 'square shingle',
  city: 'Madelinetown',
  country: 'Bermuda',
};

export const sampleWithNewData: NewCustomerDetails = {
  gender: 'FEMALE',
  phone: '1-309-718-9303 x4546',
  addressLine1: 'bah geez',
  city: 'East Lexie',
  country: 'Falkland Islands (Malvinas)',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
