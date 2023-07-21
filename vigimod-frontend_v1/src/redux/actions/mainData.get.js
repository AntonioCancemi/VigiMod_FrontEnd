import { getAds } from "../../axios/service/adService";
import { getReports } from "../../axios/service/reportService";
import { getSellers } from "../../axios/service/sellerService";

export const FETCH_ALL_DATA_REQUEST = "FETCH_ALL_DATA_REQUEST";
export const FETCH_ADS_SUCCESS = "FETCH_ADS_SUCCESS";
export const FETCH_SELLERS_SUCCESS = "FETCH_SELLERS_SUCCESS";
export const FETCH_REPORTS_SUCCESS = "FETCH_REPORTS_SUCCESS";
export const FETCH_ADS_ERROR = "FETCH_ADS_ERROR";
export const FETCH_SELLERS_ERROR = "FETCH_SELLERS_ERROR";
export const FETCH_REPORTS_ERROR = "FETCH_REPORTS_ERROR";
export const FETCH_ALL_DATA_CLOSE = "FETCH_ALL_DATA_CLOSE";
export const fetchForMainDashboard = (config) => {
  return (dispatch) => {
    console.log("load fetch fetchAdsForDashboard");
    dispatch({ type: FETCH_ALL_DATA_REQUEST });

    getAds(config)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_ADS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ADS_ERROR,
          payload: error.message,
        });
      });
    getSellers(config)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_SELLERS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_SELLERS_ERROR,
          payload: error.message,
        });
      });
    getReports(config)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_REPORTS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_REPORTS_ERROR,
          payload: error.message,
        });
      });
    dispatch({ type: FETCH_ALL_DATA_CLOSE });
  };
};
