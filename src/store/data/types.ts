import { IItem } from '../../models/item';
import { ICity } from '../../models/city';
import { IStatistic } from '../../models/statistic';

export enum IDataActionTypes {
  DATA__SET_ITEMS = '[DATA] SET_ITEMS',
  DATA__SET_CITIES = '[DATA] SET_CITIES',
  DATA__SET_STATISTIC = '[DATA] SET_STATISTIC',
  DATA__LOADING = '[DATA] LOADING',
}

// Типы ActionCreators
interface SetItemsAction {
  type: IDataActionTypes.DATA__SET_ITEMS;
  payload: Array<IItem> | null;
}

interface SetCitiesAction {
  type: IDataActionTypes.DATA__SET_CITIES;
  payload: Array<ICity> | null;
}

interface SetStatisticAction {
  type: IDataActionTypes.DATA__SET_STATISTIC;
  payload: IStatistic | null;
}

interface loadingAction {
  type: IDataActionTypes.DATA__LOADING;
}

// Общий тип Action
export type DataAction = SetItemsAction | SetCitiesAction | SetStatisticAction | loadingAction;
