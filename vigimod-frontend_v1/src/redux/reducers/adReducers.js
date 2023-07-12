const initialState = {
  allAdsByS: [],
  pendingAds: [],
  loading: false,
  error: null,
};

const adReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_P_ADS_SUCCESS":
      return {
        ...state,
        pendingAds: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_A_ADS_SUCCESS":
      return {
        ...state,
        allAdsByS: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ADS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ADS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adReducer;
