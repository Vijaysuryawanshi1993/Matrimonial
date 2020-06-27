import { combineReducers } from "redux";
import persistedReducer from "./persistedReducer";


const rootReducer = combineReducers({
  persistedReducer
});

export default rootReducer;