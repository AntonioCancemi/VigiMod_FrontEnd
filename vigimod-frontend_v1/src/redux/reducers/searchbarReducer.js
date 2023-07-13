import {
  SET_AD_ID,
  FETCH_AD_ERROR,
  FETCH_AD_REQUEST,
  FETCH_AD_SUCCESS,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SELLER_ERROR,
  FETCH_SELLER_REQUEST,
  FETCH_SELLER_SUCCESS,
  SET_PRODUCT_ID,
  SET_SELLER_ID,
} from "../actions/searchbar.actions";
const initialState = {
  ad: {
    adId: null,
    ad: [],
    loading: false,
    error: null,
  },
  seller: {
    sellerId: null,
    seller: [],
    loading: false,
    error: null,
  },
  product: {
    productId: null,
    product: [],
    loading: false,
    error: null,
  },
};
const searchbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AD_ID:
      return {
        ...state,
        ad: { ...state.ad, adId: action.payload },
      };
    case FETCH_AD_REQUEST:
      return {
        ...state,
        ad: {
          ...state.ad,
          loading: true,
          error: null,
        },
      };
    case FETCH_AD_SUCCESS:
      return {
        ...state,
        ad: { ...state.ad, ad: [action.payload], loading: false, error: null },
      };
    case FETCH_AD_ERROR:
      return {
        ...state,
        ad: {
          ...state.ad,
          loading: false,
          error: action.payload,
        },
      };
    case SET_SELLER_ID:
      return {
        ...state,
        seller: { ...state.seller, sellerId: action.payload },
      };
    case FETCH_SELLER_REQUEST:
      return {
        ...state,
        seller: {
          ...state.seller,
          loading: true,
          error: null,
        },
      };
    case FETCH_SELLER_SUCCESS:
      return {
        ...state,
        seller: {
          ...state.seller,
          seller: action.payload,
          loading: false,
          error: null,
        },
      };
    case FETCH_SELLER_ERROR:
      return {
        ...state,
        seller: {
          ...state.seller,
          loading: false,
          error: action.payload,
        },
      };
    case SET_PRODUCT_ID:
      return {
        ...state,
        product: { ...state.product, productId: action.payload },
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        product: {
          ...state.product,
          loading: true,
          error: null,
        },
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: {
          ...state.product,
          product: action.payload,
          loading: false,
          error: null,
        },
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        product: {
          ...state.product,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
export default searchbarReducer;
