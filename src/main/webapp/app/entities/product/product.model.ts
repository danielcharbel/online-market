import { IProductCategory } from 'app/entities/product-category/product-category.model';
import { ProductSize } from 'app/entities/enumerations/product-size.model';

export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  productSize?: keyof typeof ProductSize | null;
  image?: string | null;
  imageContentType?: string | null;
  productCategory?: IProductCategory | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
