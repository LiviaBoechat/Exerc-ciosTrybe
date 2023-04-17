import { combineReducers } from 'redux';
import { characterReducer } from '../reducers/characterReducer'

const rootReducer = combineReducers({ characterReducer });

export default rootReducer;