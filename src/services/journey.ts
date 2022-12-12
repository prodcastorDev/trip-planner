import axios from 'utils/axios';
import { JOURNEYS_URL } from 'constants/URLS';
import { JourneyAPIResponse } from 'types/APIResponse';

interface Params {
  from: string;
  to: string;
  departure: string;
}

const getParams = (params: Params) => {
  return {
    from: params.from,
    to: params.to,
    departure: params.departure,
  };
};

export const getJourneys = (params: Params) =>
  axios.get<JourneyAPIResponse>(`${JOURNEYS_URL}`, {
    params: getParams(params),
  });
