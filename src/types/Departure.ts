import { Line } from './Line';
import { Stop } from './Stop';

export interface Departure {
  tripId: string;
  direction: string;
  line: Line;
  when: string;
  plannedWhen: string;
  delay: number;
  platform?: string;
  plannedPlatform?: string;
  stop: Stop;
  remarks: string[];
}
