import dayjs from 'dayjs/esm';
import { IProductOrder } from 'app/entities/product-order/product-order.model';
import { ICustomerDetails } from 'app/entities/customer-details/customer-details.model';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

export interface IShoppingCart {
  id: number;
  placedDate?: dayjs.Dayjs | null;
  status?: keyof typeof OrderStatus | null;
  totalPrice?: number | null;
  paymentMethod?: keyof typeof PaymentMethod | null;
  orders?: IProductOrder[] | null;
  customerDetails?: ICustomerDetails | null;
}

export type NewShoppingCart = Omit<IShoppingCart, 'id'> & { id: null };
