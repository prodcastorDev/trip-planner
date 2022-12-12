import { Leg } from 'types/Leg';

export interface Journey {
  legs: Leg[];
  price: { amount: number };
}
