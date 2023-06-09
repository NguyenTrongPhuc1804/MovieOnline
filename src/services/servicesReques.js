import axios from "axios";
import { DOMAIN } from "../util/setting";

export const requestMovie = axios.create({
  baseURL: DOMAIN,
});
export default requestMovie;

requestMovie.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //     config.headers.Authorization = `Bearer ${localStorage.getItem(
    //       ACCESS_TOKEN
    //     )}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
requestMovie.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
