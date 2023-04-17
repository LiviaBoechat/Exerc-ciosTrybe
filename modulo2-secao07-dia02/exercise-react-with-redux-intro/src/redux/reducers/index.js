import { combineReducers } from "redux";
import carsReducer from "./trafficSignalReducer";
import trafficSignalReducer from "./carsReducer";

const INITIAL_STATE = {
  color: red,
};


const rootReducer = combineReducers({
  carsReducer,
  trafficSignalReducer,
});

export default rootReducer;

