/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants';
import { readToken } from '../utils';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

httpClient.interceptors.request.use(
  function (config) {
    config.headers['Authorization '] = `Bearer: ${readToken()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { httpClient };
