import api from "../config/api";

export const getProducts = (config = {}) => {
  return api.get("/product", config);
};

export const getProduct = (productId, config = {}) => {
  return api.get(`/product/${productId}`, config);
};

export const createProduct = (productData, config = {}) => {
  return api.post("/product", productData, config);
};

export const updateProduct = (productId, productData, config = {}) => {
  return api.put(`/product/${productId}`, productData, config);
};

export const deleteProduct = (productId, config = {}) => {
  return api.delete(`/product/${productId}`, config);
};
