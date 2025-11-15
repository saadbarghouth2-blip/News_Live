import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const fetchNews = (params) => api.get('/news', { params }).then(r => r.data);
export default api;
