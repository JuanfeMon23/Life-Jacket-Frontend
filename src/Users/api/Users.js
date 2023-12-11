import axios from '../../api/axios.js';

export const getUsersRequest = async () => axios.get('/Users');

export const createUserRequest = async (user) => axios.post('/Users', user);

export const updateUserRequest = async (idUser, user) => axios.put(`/Users/${idUser}`, user);

export const stateUserRequest = async (idUser) => axios.patch(`/Users/${idUser}`);

export const deleteUserRequest = async (id) => axios.delete(`/Users/${id}`);



