import axios from 'axios';

const URL = 'http://localhost:80';

export const fetchJobs = (payload) => axios.get(`${URL}/jobs`, { params: { page: payload } });
export const fetchSearchJobs = (payload) => axios.get(`${URL}/jobs/search`, { params: { keyword: payload } });
export const fetchAllJobs = () => axios.get(`${URL}/jobs/all`);
