import axios from "axios";

const instance = axios.create({
  baseURL: "https://gg-finalterm-backend.vercel.app",
});

export default instance;