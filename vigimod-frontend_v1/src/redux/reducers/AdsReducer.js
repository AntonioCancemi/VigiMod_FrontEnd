import {
  INCREASE_INDEX,
  REMOVE_AD,
  RESET_INDEX,
  SET_AD,
  SET_ADS,
  SET_ADS_TO_SHOW,
} from "../actions/AdsAction";

const initialState = {
  ads: {},
  ad: {},
  adsToShow: {},
  index: 0,
};
const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADS:
      return { ...state, ads: action.payload };
    case SET_ADS_TO_SHOW:
      return { ...state, adsToShow: action.payload };
    case SET_AD:
      return { ...state, ad: action.payload };
    case REMOVE_AD:
      return { ...state, ad: action.payload };
    case INCREASE_INDEX:
      return { ...state, index: state.index + action.payload };
    case RESET_INDEX:
      return { ...state, index: action.payload };

    default:
      return state;
  }
};
export default ContentReducer;
