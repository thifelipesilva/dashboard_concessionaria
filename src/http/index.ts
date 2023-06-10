import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
});

http.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    const token = sessionStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    // Faz alguma coisa com o erro da requisição
    console.log(`Erro no interceptador de requisições`);
    return Promise.reject(error);
});

export default http;