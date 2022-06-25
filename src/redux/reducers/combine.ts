import { combineReducers } from 'redux';
import moneyReducer from './index';

const reducers = combineReducers({
    state: moneyReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;