import axios from 'axios';

const api = axios.create({
  baseURL:"http://localhost:2300/api/",
  // baseURL:"https://event-manager-p6m5.onrender.com/api",
  
});

export default api;
