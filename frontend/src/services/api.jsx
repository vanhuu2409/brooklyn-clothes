import axios from "axios";
const response = await axios.get("/api/product/getall/");
const fetchData = response.data.products;

export const handleUserApiPost = async (url, data) => {
  const res = await axios.post(url, data);
  const resData = res.data;
  return resData;
};
export const handleProductApiGetById = async (id) => {
  const res = await axios.get(`/api/product/getall/${id}`);
  const resData = await res.data;
  return resData;
};

export { fetchData };
