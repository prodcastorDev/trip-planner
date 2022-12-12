export interface Leg {
  origin: {
    name: string;
  };
  departure: string;
  arrival: string;
  tripId: string;
  line: {
    name: string;
    productName: string;
  };
  price: { amount: number };
}
