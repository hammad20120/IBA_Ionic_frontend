import { combineReducers } from "redux";
import { positionReducer } from "./PositionReducer";

export const rootReducer = combineReducers({
  position: positionReducer,
});
