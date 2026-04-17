import axios from "axios";

const API = axios.create({
  baseURL:
    `${import.meta.env.VITE_BACKEND_URL}/api` || "http://localhost:3000/api",
});

export default API;
