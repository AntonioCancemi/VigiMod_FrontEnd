import api from "../config/api";

export const registerPostDTO = (data) => {
  return api.post("/auth/singup", data);
};
export const loginPostDTO = (data) => {
  return api.post("/auth/signin", data);
};
