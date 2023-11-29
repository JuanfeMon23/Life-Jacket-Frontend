import axios from '../../api/axios.js';

export const getImprovementesRequest = async () => axios.get('/Improvements');

export const createImprovementsRequest = async (improvement) => axios.post('/Improvements', improvement);

export const statusImprovementRequest = async (idImprovement) => axios.put(`/Improvements/${idImprovement}` )

export const editImprovementRequest = async (idImprovement, improvement) => axios.put(`/Improvements/${idImprovement}`, improvement);

export const deleteImprovementRequest = async (idImprovements) => axios.delete(`/Improvements/${idImprovements}`)