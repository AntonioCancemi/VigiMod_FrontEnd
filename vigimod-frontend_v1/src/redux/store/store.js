import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContentReducer from "../reducers/adReducers";
import thunk from "redux-thunk";

const bigReducer = combineReducers({
  content: ContentReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: [thunk],
});
export default store;
