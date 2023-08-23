import axios from '../../api/axios.js';

export const getUsersRequest = async () => axios.get('/Users');

export const getUserRequest =  async (idUser) => axios.get(`/Users/${idUser}`);

export const createUserRequest = async (User) => axios.post('/Users', User);

export const updateUserRequest = async (User) => axios.put(`/Users/${User.id}`, User);

export const deleteUserRequest = async (idUser) => axios.delete(`/Users/${idUser}`);

export const searchUserRequest = async (idUser, userEmail, userName) => axios.get(`/Users/${idUser, userEmail, userName}`);