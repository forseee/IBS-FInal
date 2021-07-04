import axios, { AxiosInstance } from 'axios';
import { ApiItems } from './items';
import { ApiCities } from './cities';

  class Api {
    private axios: AxiosInstance;
    items: ApiItems;
    cities: ApiCities;
    constructor(axios: AxiosInstance) {
      this.axios = axios;
      this.items = new ApiItems(axios);
      this.cities = new ApiCities(axios);
    }
  }
//главный объект для запросов
let API: Api;
const createAPI = (headers = {}) => {
  API = new Api(
    axios.create({
      baseURL: '/api',
      withCredentials: true,
      headers: {
        'API-token': '6047b22b2da048618b4f8b293369e44c',
      },
    }),
  );
};
createAPI({});

export { API, createAPI };

export enum HTTP_STATUS {
  AppError = 100,
  ServerError = 500,
  Access = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  NotFound = 404,
}
