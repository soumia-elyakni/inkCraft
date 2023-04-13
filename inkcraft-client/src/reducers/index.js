import { combineReducers } from 'redux';
import { createStorieReducer } from './storie-reducers';

const rootReducer = combineReducers({
  activeStorie: createStorieReducer(),
});

export default rootReducer;