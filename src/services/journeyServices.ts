import instance from '../Axios/axios';
import { URLs } from '../constants/services';
import { Journey } from '../types/Journey';

interface Params {
  from: string;
  to: string;
  departure: string;
}

const getParams = (params: Params) => {
  return {
    from: params.from || '',
    to: params.to || '',
    departure: params.departure || '',
  };
};

interface JourneyAPIResponse {
  earlierRef: string;
  laterRef: string;
  journeys: Journey[];
  realtimeDataFrom: number;
}

export const getJourneys = (params: Params) =>
  instance.get<JourneyAPIResponse>(`${URLs.JOURNEYS}`, {
    params: getParams(params),
  });
