import { combineReducers } from "redux";
import logReducer from "./logReducer";
import TechReducer from "./TechReducer";

export default combineReducers({
  log: logReducer,
  tech: TechReducer
});