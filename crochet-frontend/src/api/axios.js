import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Laravel backend
  withCredentials: true, // 👈 very important for Sanctum
});

export default api;
