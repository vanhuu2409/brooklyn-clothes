import axios from "axios";
axios.defaults.withCredentials = true;

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Credentials": true,
  },
  // credentials: "include",
  // withCredentials: true,
});

const response = await http.get("/api/product/getall/");
const fetchData = response.data.products;

export const handleUserApiPost = async (url, data) => {
  const res = await http.post(url, data);
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

export const handleRatingApiGetByProductId = async (id) => {
  const res = await http.get(
    `${import.meta.env.VITE_API_URL}/api/ratings/product/${id}`
  );
  const resData = await res.data;
  return resData;
};

export const handleRatingApiCreateByProductId = async (id, body) => {
  const res = await http.post(
    `${import.meta.env.VITE_API_URL}/api/ratings/create/${id}`,
    body
  );
  const resData = await res.data;
  return resData;
};

export const handleSignoutApi = async () => {
  const res = await http.get(
    `${import.meta.env.VITE_API_URL}/api/auth/signout`
  );
};

export const handleDeleteUserApi = async (id) => {
  const response = await http.delete(
    `${import.meta.env.VITE_API_URL}/api/user/delete/${id}`
  );
  return response;
};

export const handleDeleteCartItem = async (id, option) => {
  const response = await http.delete(
    `${import.meta.env.VITE_API_URL}/api/cart/delete/${id}`,
    { data: option }
  );
  return response;
};

export { fetchData };

export default http;
