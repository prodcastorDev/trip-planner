import { Line } from 'types/Line';
import { Stop } from 'types/Stop';

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
