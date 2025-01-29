import axios from "axios";
import Cookies from "universal-cookie";
let cookies = Cookies();
let token = cookies.get("token");
export let myAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
