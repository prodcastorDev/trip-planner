import axios from '../axios/axios';
import { LOCATIONS_URL } from 'constants/URLS';
import { Location } from 'types/Location';

interface Params {
  query: string;
}

const getParams = (params: Params) => {
  return {
    query: params.query,
  };
};

export const getLocations = (params: Params) =>
  axios.get<Location[]>(`${LOCATIONS_URL}`, {
    params: getParams(params),
  });
