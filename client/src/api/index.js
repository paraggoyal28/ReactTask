import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token.token}`;
    }
    return req;
});

export const fetchTasks = () => API.get('/tasks');

export const createTask = (task) => API.post('/tasks', task);

export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);

export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const signIn = (formData) => API.post(`/login`, formData);

