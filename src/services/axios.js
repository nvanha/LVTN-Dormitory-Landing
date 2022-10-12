import axios from 'axios';

import config from './server';

const axiosApiInstance = axios.create({
  baseURL: config.API_URL,
  timeout: config.DEFAULT_REQUEST_TIMEOUT,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('accessToken');
    config.headers = {
      'X-Authentication': `${access_token}`,
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const originalRequest = error.config;
      if (error?.response?.status === 403 && !originalRequest['_retry']) {
        originalRequest['_retry'] = true;
        const access_token = localStorage.getItem('refresh_token');
        axios.defaults.headers.common['X-Authentication'] = `${access_token}`;
        return axiosApiInstance(originalRequest);
      }
      if (error?.response?.status === 401) {
        // localStorage.removeItem('accessToken');
        // window.location.replace('/login');
      }

      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export default axiosApiInstance;
