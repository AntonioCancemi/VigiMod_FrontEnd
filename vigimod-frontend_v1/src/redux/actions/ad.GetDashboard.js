import {
  getAd,
  getAdsBySeller,
  getAdsCount,
  getAdsForDashboard,
} from "../../axios/service/adService";
export const FETCH_ADS_ERROR = "FETCH_ADS_REQUEST";
export const FETCH_ADS_REQUEST = "FETCH_ADS_REQUEST";
export const FETCH_P_ADS_SUCCESS = "FETCH_P_ADS_SUCCESS";
export const FETCH_A_ADS_SUCCESS = "FETCH_A_ADS_SUCCESS";
export const FETCH_ADS_COUNT = "FETCH_ADS_COUNT";

const mapData = (data) => {
  return Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));
};
//Dashbord Pending ADS
export const fetchAdsForDashboard = (config) => {
  return (dispatch) => {
    console.log("load fetch fetchAdsForDashboard");
    dispatch({ type: FETCH_ADS_REQUEST });

    getAdsForDashboard(config)
      .then((response) => mapData(response.data))
      .then((data) => {
        dispatch({
          type: FETCH_P_ADS_SUCCESS,
          payload: data,
        });
        console.log(mapData(response.data));
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ADS_ERROR,
          payload: error.message,
        });
      });
  };
};
//Dashbord GET All Ads BY Seller
export const fetchAdsBySeller = (sellerId, config) => {
  return (dispatch) => {
    console.log("load fetch fetchAdsBySeller");
    console.log(sellerId);
    dispatch({ type: FETCH_ADS_REQUEST });

    getAdsBySeller(sellerId, config)
      .then((response) => {
        dispatch({
          type: FETCH_A_ADS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ADS_ERROR,
          payload: error.message,
        });
      });
  };
};
export const fetchAdsCount = (config) => {
  return (dispatch) => {
    console.log("load fetch ads count");
    getAdsCount(config)
      .then((response) => {
        dispatch({ type: FETCH_ADS_COUNT, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
};

// Definisci altre azioni per le richieste API necessarie
