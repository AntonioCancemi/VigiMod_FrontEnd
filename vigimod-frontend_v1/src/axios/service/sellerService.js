import api from "../config/api";
// Interceptor per le richieste

export const getSellers = (config = {}) => {
  return api.get("/seller", config);
};

export const getSeller = ({ sellerId }, config = {}) => {
  return api.get(`/seller/${sellerId}`, config);
};

export const getFilteredSellers = (config = {}, params = {}) => {
  return api.get(`/seller/list`, config, params);
};

export const createSeller = (sellerData, config = {}) => {
  return api.post("/seller", sellerData, config);
};

export const updateSeller = (sellerId, sellerData, config = {}) => {
  return api.put(`/seller/${sellerId}`, sellerData, config);
};

export const deleteSeller = (sellerId, config = {}) => {
  return api.delete(`/seller/${sellerId}`, config);
};
