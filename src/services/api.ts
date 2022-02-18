import axios from 'axios';

const api = axios.create({
  baseURL: 'https://go-restaurant-o28k55ds9-batuttas.vercel.app',
});

export default api;
