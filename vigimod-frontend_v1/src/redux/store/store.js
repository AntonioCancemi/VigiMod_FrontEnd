import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContentReducer from "../reducers/adReducers";
import SearchbarReducer from "../reducers/searchbarReducer";
import thunk from "redux-thunk";

const bigReducer = combineReducers({
  content: ContentReducer,
  search: SearchbarReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: [thunk],
});
export default store;
