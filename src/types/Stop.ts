import { Products } from './Products';
import { Station } from './Station';

export interface Stop {
  type: string;
  id: string;
  name: string;
  location: Location;
  products: Products;
  station: Station;
}
