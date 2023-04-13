import axios from "axios";

const url = "http://localhost:8088/api";

export const getallProducts = async (id) => {
  id = id || "";
  return await axios.get(`${url}/products/${id}`);
};

export const addProduct = async (product) => {
  return await axios.post(`${url}/products/`, product);
};

export const editProduct = async (id, product) => {
  return await axios.put(`${url}/products/${id}`, product);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${url}/products/${id}`);
};

export const signUp = async (user) => {
  return await axios.post(`${url}/signup/`, user);
};
