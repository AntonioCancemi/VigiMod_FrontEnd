import api from "../config/api";

export const registerPostDTO = (data, config = {}) => {
  return api.post("/auth/singup", data, config);
};
