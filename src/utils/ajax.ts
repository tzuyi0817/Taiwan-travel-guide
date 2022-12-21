import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('guide_token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    // const { data } = error.response;

    // if (data === 'Unauthorized') {
    //   useCodeContentStore().setCodeId('');
    //   useUserStore().setUser({});
    //   localStorage.removeItem('code_token');
    //   toast.showToast('account is logged out', 'error');
    // } else {
    //   toast.showToast(data?.message ?? error.message, 'error');
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
