import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:3002/api",
  // withCredentials: true,
})

export default apiRequest