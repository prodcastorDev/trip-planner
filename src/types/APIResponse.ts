import { Journey } from './Journey';

export interface JourneyAPIResponse {
  earlierRef: string;
  laterRef: string;
  journeys: Journey[];
  realtimeDataFrom: number;
}
