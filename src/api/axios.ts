import axios from "axios";
import Cookies from "js-cookie";
import { refreshAccessToken } from "../features/auth/api/RefreshApi";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string | null) => void; reject: (error: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

// ✅ Routes publiques qui ne nécessitent pas de token
const publicRoutes = ['login', 'register', 'forgot-password', 'reset-password'];

// Request interceptor to add the access token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle unauthorized errors
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // ✅ Vérifie si c'est une route publique
        const isPublicRoute = publicRoutes.some(route =>
            originalRequest.url?.includes(route)
        );

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry &&
            !isPublicRoute // ✅ Ne pas tenter de refresh sur les routes publiques
        ) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    return api(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const data = await refreshAccessToken();
                const { accessToken } = data;

                localStorage.setItem('accessToken', accessToken);
                originalRequest.headers['Authorization'] = 'Bearer ' + accessToken; // ✅ Décommenté

                processQueue(null, accessToken);
                return api(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
                Cookies.remove('refreshToken');

                if (window.location.pathname !== '/login') {
                    window.location.href = '/login';
                }
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);

export default api;