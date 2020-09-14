import { combineReducers } from "redux";
import { crisisReducer } from "./CrisisReducer";

export const rootReducer = combineReducers({
  crisis: crisisReducer,
});
