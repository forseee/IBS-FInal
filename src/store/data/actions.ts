import { IItem } from '../../models/item';
import { DataAction, IDataActionTypes } from './types';
import { ICity } from '../../models/city';
import { IStatistic } from '../../models/statistic';

/**
 * Записать ITEMS в store
 * @param items
 */
export const data__setItems = (items: Array<IItem> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_ITEMS,
  payload: items,
});

/**
 * Записать CITIES в store
 * @param cities
 */
export const data__setCities = (cities: Array<ICity> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_CITIES,
  payload: cities,
});

/**
 * Записать STATISTIC в store
 * @param statistic
 */
export const data__setStatistic = (statistic: IStatistic | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_STATISTIC,
  payload: statistic,
});

/**
 * LOADER
 */
export const data__loading = (): DataAction => ({
  type: IDataActionTypes.DATA__LOADING,
});
