import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
const instance = axios.create({
  baseURL: apiUrl, // l'URL di base per tutte le richieste
});

// Interceptor per le risposte
instance.interceptors.response.use(
  (response) => {
    // Elabora la risposta
    return response;
  },
  (error) => {
    // gli errori di risposta
    return Promise.reject(error);
  }
);
export default instance;
