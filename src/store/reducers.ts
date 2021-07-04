import { combineReducers } from 'redux';
import { dataReducer } from './data/reducer';

export enum StoreSection {
  data = 'data',
}

export const rootReducer = combineReducers({
  [StoreSection.data]: dataReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
