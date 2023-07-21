import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContentReducer from "../reducers/adReducers";
import SearchbarReducer from "../reducers/searchbarReducer";
import AllDataReducer from "../reducers/mainDataReducers";
import thunk from "redux-thunk";

const bigReducer = combineReducers({
  content: ContentReducer,
  search: SearchbarReducer,
  allData: AllDataReducer,
});

const store = configureStore({
  reducer: bigReducer,
  middleware: [thunk],
});
export default store;
