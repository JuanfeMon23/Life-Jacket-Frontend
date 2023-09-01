import axios from '../../api/axios.js';

export const getClientsRequest = async (client) => axios.get('/Clients');

export const getClientRequest = async (client) => axios.get(`/Clients${client}`);

export const createClientRequest = async (client) => axios.post('/Clients', client);