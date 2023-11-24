import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createClientRequest, getClientsRequest, stateClientRequest, updateClientRequest, deleteClientRequest } from "../api/Clients";

const ClientContext = createContext();

export const useClients = () => {
    const context = useContext(ClientContext);
    return context;
};

export function ClientProvider({children}){
    const [clients, setClients] = useState([]);
    
    const getClients = async () => {
        try {
            const res = await getClientsRequest();
            setClients(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };


    const createClient = async (client) => {
        try {
            const res = await createClientRequest(client);
            toast.success('Cliente registrado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getClients();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const updateClient = async (idClient, client) => {
        try {
            await updateClientRequest(idClient, client);
            toast.success('Cliente actualizado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getClients();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const statusClient = async (idClient) => {
        try {
            await stateClientRequest(idClient);
            toast.success('Estado actualizado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
            getClients();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const deleteClient = async (idClient) => {
        try {
            await deleteClientRequest(idClient);
            toast.success('Ciente eliminado con éxito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getClients();
        } catch (error) {
            toast.error('Error al eliminar el cliente' ,{
                autoClose : 1500,
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };



    return(
        <ClientContext.Provider value={{clients, getClients, createClient, updateClient, statusClient, deleteClient}}>
            {children}
        </ClientContext.Provider>
    )
};