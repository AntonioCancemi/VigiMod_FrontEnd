export const SET_ADS = "SET_ADS";
export const SET_ADS_TO_SHOW = "SET_ADS_TO_SHOW";
export const SET_AD = "SET_AD";
export const REMOVE_AD = "REMOVE_AD";
export const INCREASE_INDEX = "INCREASE_INDEX";
export const RESET_INDEX = "RESET_INDEX";

export const setAds = (ads) => {
  return {
    type: SET_ADS,
    payload: Object.entries(ads).map(([key, value]) => ({
      key,
      value,
    })),
  };
};
export const setAd = (ad) => {
  return {
    type: SET_AD,
    payload: ad,
  };
};
export const setAdsToShow = (ad) => {
  return {
    type: SET_ADS_TO_SHOW,
    payload: ad,
  };
};
export const removeAd = (id) => {
  return {
    type: REMOVE_AD,
    payload: id,
  };
};
export const increaseIndex = () => {
  return {
    type: INCREASE_INDEX,
    payload: 1,
  };
};
export const resetIndex = () => {
  return {
    type: RESET_INDEX,
    payload: 0,
  };
};
