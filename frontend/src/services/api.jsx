import axios from "axios";
axios.defaults.withCredentials = true;

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // credentials: "include",
  // withCredentials: true,
});

const response = await http.get("/api/product/getall/");
const fetchData = response.data.products;

export const handleUserApiPost = async (url, data) => {
  const res = await axios.post(url, data);
  const resData = res.data;
  return resData;
};
export const handleProductApiGetById = async (id) => {
  const res = await http.get(
    `${import.meta.env.VITE_API_URL}/api/product/getall/${id}`
  );
  const resData = await res.data;
  return resData;
};

export { fetchData };

export default http;
