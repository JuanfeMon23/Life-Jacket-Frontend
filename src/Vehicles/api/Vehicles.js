import axios from '../../api/axios';

export const getVehiclesRequest = async (vehicle) => axios.get('/Vehicles');

export const getVehicleTypeRequest = async (vehicleType) => axios.get('/vehicle-types', vehicleType);

export const getVehicleRequest = async (idVehicle, vehicle) => axios.get(`/Vehicles/${vehicle}` , vehicle);

export const createVehiclesRequest = async (vehicle) => axios.post('/Vehicles', vehicle);

export const createVehicleDetailRequest = async (detailVehicle) => axios.post(`/Vehicles/detail`, detailVehicle);

export const updateVehicleRequest = async (idVehicle, vehicle) => axios.put(`/Vehicles/${idVehicle}`, vehicle);

export const statusVehicleRequest = async (idVehicle, vehicle) => axios.patch(`/Vehicles/${idVehicle}`, vehicle);

export const deleteVehicleRequest = async (idVehicle) => axios.delete(`/Vehicles/${idVehicle}`);