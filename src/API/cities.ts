import { AxiosInstance } from 'axios';
import { ICity } from '../models/city';

type IPhotosResponse = Array<ICity>;

export class ApiCities {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () => this.axios.get<IPhotosResponse>(`/citys`).then((d) => d.data);
}
