import axios from '../../api/axios.js';

export const getUsersRequest = async () => axios.get('/Users');

export const getUserRequest =  async (user) => axios.get(`/Users/${user}`);

export const createUserRequest = async (user) => axios.post('/Users', user);

export const updateUserRequest = async (user) => axios.put(`/Users/${user.id}`, user);

export const deleteUserRequest = async (id) => axios.delete(`/Users/${id}`);

export const searchUserRequest = async (idUser, userEmail, userName) => axios.get(`/Users/${idUser, userEmail, userName}`);