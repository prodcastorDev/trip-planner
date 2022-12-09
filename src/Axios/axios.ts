import axios, { AxiosRequestConfig } from 'axios';
import { URLs } from '../constants/services';

const config = {
  baseURL: URLs.BASE,
};

const instance = axios.create(config as AxiosRequestConfig);

instance.interceptors.response.use(undefined, (error: Error) => Promise.reject(error));

export default instance;
