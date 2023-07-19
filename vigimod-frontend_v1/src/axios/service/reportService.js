import api from "../config/api";

export const getReports = (confing = {}) => {
  return api.get("/report", confing);
};

export const getReport = (reportId) => {
  return api.get(`/report/${reportId}`);
};

export const createReport = (reportData) => {
  return api.post("/report", reportData);
};

export const updateReport = (reportId, reportData) => {
  return api.put(`/report/${reportId}`, reportData);
};

export const deleteReport = (reportId) => {
  return api.delete(`/report/${reportId}`);
};
