import api from "../config/api";

export const registerPostDTO = (data) => {
  return api.post("/auth/register", data);
};
export const loginPostDTO = (data) => {
  return api.post("/auth/signin", data);
};
export const getUserData = (username) => {
  return api.get(`/auth/${username}`);
};
