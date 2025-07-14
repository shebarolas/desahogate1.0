// lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// (Opcional) Interceptor de errores globales
api.interceptors.response.use(
  res => res,
  err => {
    console.error('API error:', err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;