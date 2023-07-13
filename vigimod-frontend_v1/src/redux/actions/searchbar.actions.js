import { getAd } from "../../axios/service/adService";

export const SET_AD_ID = "SET_AD_ID";
export const FETCH_AD_REQUEST = "FETCH_AD_REQUEST";
export const FETCH_AD_SUCCESS = "FETCH_AD_SUCCESS";
export const FETCH_AD_ERROR = "FETCH_AD_ERROR";
export const SET_SELLER_ID = "SET_SELLER_ID";
export const FETCH_SELLER_REQUEST = "FETCH_SELLER_REQUEST";
export const FETCH_SELLER_SUCCESS = "FETCH_SELLER_SUCCESS";
export const FETCH_SELLER_ERROR = "FETCH_SELLER_ERROR";
export const SET_PRODUCT_ID = "SET_PRODUCT_ID";
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";

//AdPage GET Ad BY id
export const fetchAdById = (adId, config) => {
  return (dispatch) => {
    console.log("load fetch fetchAdById");
    dispatch({ type: FETCH_AD_REQUEST });

    getAd(adId, config)
      .then((response) => {
        dispatch({
          type: FETCH_AD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_AD_ERROR,
          payload: error.message,
        });
      });
  };
};
export const setAdId = (adId) => {
  return {
    type: SET_AD_ID,
    payload: adId,
  };
};
