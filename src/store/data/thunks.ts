import { GetState } from '../index';
import { data__setItems, data__setCities, data__loading, data__setStatistic } from './actions';
import { API } from '../../API/api';

/**
 * Получение всех вакансий по фильтрам для таблицы
 */
export const data__getItems =
  (vac: string, city: string) => async (dispatch: any, getState: GetState) => {
    try {
      dispatch(data__loading());
      const res = await API.getStatistic(vac, city);
      dispatch(data__setStatistic(res));
      const items = await API.getTake();
      dispatch(data__setItems(items));
      await dispatch(data__loading());
    } catch (e) {
      console.error('Ошибка при запросе...', e);
      await dispatch(data__loading());
    }
  };

// /**
//  * Получили всех городов для selector кнопки
//  */
// export const data__getCities = () => async (dispatch: any, getState: GetState) => {
//   try {
//     const cities = await API.cities.getAll();
//     dispatch(data__setCities(cities));
//   } catch (e) {
//     console.error('Ошибка при запросе...', e);
//   }
// };
