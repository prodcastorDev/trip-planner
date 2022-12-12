import { Products } from 'types/Products';
import { Station } from 'types/Station';

export interface Stop {
  type: string;
  id: string;
  name: string;
  location: Location;
  products: Products;
  station: Station;
}
