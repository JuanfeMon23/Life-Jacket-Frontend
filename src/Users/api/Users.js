import axios from '../../api/axios.js';

export const getUsersRequest = async () => axios.get('/Users');

export const getUserRequest =  async (idUser) => axios.get(`/Users/${idUser}`);

export const createUserRequest = async (user) => axios.post('/Users', user);

export const updateUserRequest = async (idUser, user) => axios.put(`/Users/${idUser}`, user);

export const deleteUserRequest = async (id) => axios.delete(`/Users/${id}`);

export const searchUserRequest = async (search) => axios.get(`/Clients/SearchE/${search}`);
