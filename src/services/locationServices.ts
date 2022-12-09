import axios from '../Axios/axios';
import { URLs } from '../constants/services';
import { Location } from '../types/Location';

interface Params {
  query: string;
}

const getParams = (params: Params) => {
  return {
    query: params.query || '',
  };
};

export const getLocations = (params: Params) =>
  axios.get<Location[]>(`${URLs.LOCATIONS}`, {
    params: getParams(params),
  });
