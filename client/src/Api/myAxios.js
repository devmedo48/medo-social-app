import axios from "axios";
import Cookies from "universal-cookie";
let cookies = new Cookies();
let token = cookies.get("token");
export let myAxios = axios.create({
<<<<<<< HEAD
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
=======
  baseURL: "/api",
>>>>>>> cookies
});
