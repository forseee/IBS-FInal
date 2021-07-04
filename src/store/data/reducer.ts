import { IItem } from '../../models/item';
import { ICity } from '../../models/city';
import { IStatistic } from '../../models/statistic';
import { DataAction, IDataActionTypes } from './types';

const initialState = {
  items: null as Array<IItem> | null,
  cities: null as Array<ICity> | null,
  statistic: null as IStatistic | null,
  loader: false,
};
type IDataState = typeof initialState;

export const dataReducer = (state = initialState, action: DataAction): IDataState => {
  switch (action.type) {
    case IDataActionTypes.DATA__SET_ITEMS:
      return { ...state, items: action.payload };
    case IDataActionTypes.DATA__SET_CITIES:
      return { ...state, cities: action.payload };
    case IDataActionTypes.DATA__SET_STATISTIC:
      return { ...state, statistic: action.payload };
    case IDataActionTypes.DATA__LOADING:
      return { ...state, loader: !state.loader };
    default:
      return state;
  }
};
