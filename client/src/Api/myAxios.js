import axios from "axios";
axios.defaults.withCredentials = true;
export let myAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
