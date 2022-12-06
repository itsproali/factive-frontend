import axios from "axios";
import Cookies from "js-cookie";

const apiAgent = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

const token = Cookies.get("user") && JSON.parse(Cookies.get("user"))?.token;
console.log(token);

apiAgent.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default apiAgent;
