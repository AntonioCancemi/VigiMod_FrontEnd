import {
  FETCH_ADS_ERROR,
  FETCH_ADS_SUCCESS,
  FETCH_ALL_DATA_CLOSE,
  FETCH_ALL_DATA_REQUEST,
  FETCH_REPORTS_ERROR,
  FETCH_REPORTS_SUCCESS,
  FETCH_SELLERS_ERROR,
  FETCH_SELLERS_SUCCESS,
} from "../actions/mainData.get";

const initialState = {
  loading: null,
  ads: {
    content: [],
    error: null,
  },
  sellers: {
    content: [],
    error: null,
  },
  reports: {
    content: [],
    error: null,
  },
};
const mainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_ADS_SUCCESS:
      return { ...state, ads: { ...state.ads, content: action.payload } };
    case FETCH_ADS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        reports: { ...state.reports, content: action.payload },
      };
    case FETCH_REPORTS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_SELLERS_SUCCESS:
      return {
        ...state,
        sellers: { ...state.sellers, content: action.payload },
      };
    case FETCH_SELLERS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_ALL_DATA_CLOSE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default mainDataReducer;
