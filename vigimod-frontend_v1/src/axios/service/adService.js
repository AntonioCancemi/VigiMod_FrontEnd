import api from "../config/api";
// Interceptor per le richieste

export const getAds = (config = {}) => {
  return api.get("/ad", config);
};

export const getAd = (adId, config = {}) => {
  return api.get(`/ad/${adId}`, config);
};
export const getAdsBySeller = (sellerId, config = {}) => {
  return api.get(`/ad/list?filter=seller&key=${sellerId}`, config);
};

export const createAd = (adData, config = {}) => {
  return api.post("/ad", adData, config);
};

export const updateAd = (adId, adData, config = {}) => {
  return api.put(`/ad/${adId}`, adData, config);
};

export const deleteAd = (adId, config = {}) => {
  return api.delete(`/ad/${adId}`, config);
};
