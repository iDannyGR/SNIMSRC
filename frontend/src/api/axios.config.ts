import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND || 'http://localhost:3000/api/v1',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		// Manejo centralizado de errores
		return Promise.reject(error);
	}
);

export const httpClient = {
	get: <T>(url: string, params?: object) => axiosInstance.get<T>(url, { params }),
	post: <T>(url: string, data: object, config?: object) => axiosInstance.post<T>(url, data, config),
	put: <T>(url: string, data: object) => axiosInstance.put<T>(url, data),
	patch: <T>(url: string, data: object) => axiosInstance.patch<T>(url, data),
	delete: <T>(url: string) => axiosInstance.delete<T>(url),
};
