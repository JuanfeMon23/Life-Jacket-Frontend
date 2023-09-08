import axios from '../../api/axios';

export const getVehiclesRequest = async (vehicle) => axios.get('/Vehicles');

export const getVehicleRequest = async (idVehicle, vehicle) => axios.get(`/Vehicles/${vehicle}` , vehicle);

export const createVehiclesRequest = async (vehicle) => axios.post('/Vehicles', vehicle);

export const updateVehicleRequest = async (idVehicle, vehicle) => axios.put(`/Vehicles/${idVehicle}`, vehicle);