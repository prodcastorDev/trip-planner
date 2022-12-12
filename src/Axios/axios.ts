import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'constants/URLS';

const config = {
  baseURL: BASE_URL,
};

const instance = axios.create(config as AxiosRequestConfig);

instance.interceptors.response.use(undefined, (error: Error) => Promise.reject(error));

export default instance;
