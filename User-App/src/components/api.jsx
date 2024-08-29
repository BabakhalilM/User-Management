import axios from 'axios';

const api = axios.create({
  // baseURL:"http://localhost:2300/api/",
  baseURL:"https://user-management-sxwr.onrender.com",
  
});

export default api;
