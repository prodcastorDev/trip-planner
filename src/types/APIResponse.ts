import { Journey } from 'types/Journey';

export interface JourneyAPIResponse {
  earlierRef: string;
  laterRef: string;
  journeys: Journey[];
  realtimeDataFrom: number;
}
