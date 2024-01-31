import { IUser } from 'app/entities/user/user.model';
import { IShoppingCart } from 'app/entities/shopping-cart/shopping-cart.model';
import { Gender } from 'app/entities/enumerations/gender.model';

export interface ICustomerDetails {
  id: number;
  gender?: keyof typeof Gender | null;
  phone?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  country?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
  carts?: IShoppingCart[] | null;
}

export type NewCustomerDetails = Omit<ICustomerDetails, 'id'> & { id: null };
