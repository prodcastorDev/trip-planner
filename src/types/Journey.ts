import { Leg } from './Leg';

export interface Journey {
  legs: Leg[];
  price: { amount: number };
}
