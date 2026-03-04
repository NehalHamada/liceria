import axios from "axios";

const API_URL = "https://wooden.ahdafweb.com/public/api/products/latest-items";
export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};
