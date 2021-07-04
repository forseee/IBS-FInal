import { AxiosInstance } from 'axios';
import { IItem } from '../models/item';

type IItemsResponse = Array<IItem>;

export class ApiItems {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getFilter = (city: string, name: string) =>
    this.axios.get<IItemsResponse>(`/items?city${city}&name=${name}`).then((d) => d.data);
  getFilterTest = () => this.axios.get(`/competitions`).then((d) => d.data.competitons);
}
