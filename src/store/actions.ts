import * as DataActionCreators from './data/actions';
import * as DataThunksCreators from './data/thunks';

export const ActionCreators = {
  ...DataActionCreators,
  ...DataThunksCreators,
};
