import axios from '../../api/axios';

export const getVehiclesRequest = async (vehicle) => axios.get('Vehicles');

export const getVehicleRequest = async (vehicle) => axios.get(`Vehicles${vehicle}`);

export const createVehiclesRequest = async (vehicle) => axios.post('Vehicles', vehicle);