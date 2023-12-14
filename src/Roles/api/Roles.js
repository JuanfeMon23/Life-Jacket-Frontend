import axios from '../../api/axios.js';

export const getRolesRequest = async () => axios.get('/Roles');

export const createRolRequest = async (Roles) => axios.post(`/Roles`, Roles);

export const updateRolRequest = async (idRol, Licenses) => axios.put(`/Roles/${idRol}`, Licenses);

export const statusRolRequest = async (idRol) => axios.patch(`Roles/${idRol}`);

export const deleteRolRequest = async (idRol) => axios.delete(`Roles/${idRol}`);

export const getLicensesRequest = async () => axios.get('/Licenses');

export const addLicensesRequest = async (idRol, licenses) => axios.post (`/Roles/${idRol}/Licenses/${licenses}`, licenses);