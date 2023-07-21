import axios from 'axios';

// CREATE
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

// GET
export const getAllTasks = () => {
    // return axios.get('http://localhost:8000/tasks/api/v1/tasks/')
    return tasksApi.get('/');
}

// UPDATE (?)>>
export const createTask = (task) => {
    // return axios.post('http://localhost:8000/tasks/api/v1/tasks/', task)
    return tasksApi.post('/', task);
}