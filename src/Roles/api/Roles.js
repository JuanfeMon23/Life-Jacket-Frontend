import axios from '../../api/axios.js';

export const getRolesRequest = async () => axios.get('/Roles');

export const getRolRequest = async (Roles) => axios.get(`/Roles${Roles}`);

export const createRolRequest = async (Roles) => axios.post(`/Roles`, Roles);

export const updateRolRequest = async (Roles) => axios.put(`/Roles`, Roles);

export const deleteRolRequest = async (id) => axios.delete(`Roles/${id}`);

export const getLicensesRequest = async () => axios.get('/Licenses');

export const addLicensesRequest = async (idRol, licenses) => axios.post (`/Roles/${idRol}/Licenses/${licenses}`, licenses);