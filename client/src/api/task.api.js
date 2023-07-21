import axios from 'axios';


//Tasks
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

const labelsApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/labels/',
})

export const getAllTasks = () => {
    // return axios.get('http://localhost:8000/tasks/api/v1/tasks/')
    return tasksApi.get('/');
}
export const createTask = (task) => {
    // return axios.post('http://localhost:8000/tasks/api/v1/tasks/', task)
    return tasksApi.post('/', task);
}
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);
export const getTask = (id) => tasksApi.get(`/${id}/`);

//LABELS
export const getAllLabels = () => {
    return labelsApi.get('/');
}
export const createLabel = (label) => {
    // return axios.post('http://localhost:8000/tasks/api/v1/labels/', label)
    return labelsApi.post('/', label);
}
export const deleteLabel = (id) => labelsApi.delete(`/${id}/`);
export const updateLabel = (id, label) => labelsApi.put(`/${id}/`, label);
export const getLabel = (id) => labelsApi.get(`/${id}/`);
