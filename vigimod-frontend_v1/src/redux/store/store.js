import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContentReducer from "../reducers/AdsReducer";

const bigReducer = combineReducers({
  content: ContentReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
