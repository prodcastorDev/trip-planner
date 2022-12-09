import { Products } from './Products';

export interface Station {
  type: string;
  id: string;
  name: string;
  location: Location;
  products: Products;
}
