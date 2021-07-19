import axios from "axios";

const API = axios.create({ baseURL: "http://35.233.244.113:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchStocks = () => API.get("/stock");
export const createStock = (newStock) => API.post("/stock", newPost);
export const deleteStock = (id) => API.delete(`/stock/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
