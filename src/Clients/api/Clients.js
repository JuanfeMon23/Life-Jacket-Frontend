import axios from '../../api/axios.js';

export const getClientsRequest = async () => axios.get('/Clients');

export const searchClientsRequest = async () => axios.get(`/Clients/SearchE/${search}`);

export const createClientRequest = async (client) => axios.post('/Clients', client);

export const updateClientRequest = async (idClient, client) => axios.put(`Clients/${idClient}`, client);

export const stateClientRequest = async (idClient) => axios.patch(`/Clients/${idClient}`);

export const deleteClientRequest = async (idClient) => axios.delete(`/Clients/${idClient}`);
