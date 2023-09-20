import axios from '../../api/axios.js';

export const getImprovementesRequest = async () => axios.get('/Improvements');

export const createImprovementsRequest = async (improvement) => axios.post('/Improvements', improvement);

