import {
  getAds,
  getAdsBySeller,
  getAdsForDashboard,
} from "../../axios/service/adService";
const mapData = (data) => {
  return Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));
};
export const fetchAdsForDashboard = (config) => {
  return (dispatch) => {
    console.log("load fetch ads");
    dispatch({ type: "FETCH_ADS_REQUEST" });

    getAdsForDashboard(config)
      .then((response) => {
        dispatch({
          type: "FETCH_P_ADS_SUCCESS",
          payload: mapData(response.data),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ADS_ERROR",
          payload: error.message,
        });
      });
  };
};
export const fetchAdsBySeller = (sellerId, config) => {
  return (dispatch) => {
    console.log("load fetch ads");
    dispatch({ type: "FETCH_ADS_REQUEST" });

    getAdsBySeller(sellerId, config)
      .then((response) => {
        dispatch({
          type: "FETCH_A_ADS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ADS_ERROR",
          payload: error.message,
        });
      });
  };
};

// Definisci altre azioni per le richieste API necessarie
