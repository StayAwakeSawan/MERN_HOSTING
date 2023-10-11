import axios from "axios";
import { getUserData } from "../utils/authStorage.utils";

const http = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
});

http.interceptors.request.use((config) => {
  if (getUserData().token) {
    config.headers["Authorization"] = getUserData().token;
  }
  return config;
});

export default http;
