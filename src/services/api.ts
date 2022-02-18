import axios from 'axios';

const api = axios.create({
  baseURL: 'https://go-restaurant.vercel.app',
});

export default api;
