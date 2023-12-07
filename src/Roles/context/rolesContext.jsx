import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createRolRequest, addLicensesRequest, getRolesRequest , deleteRolRequest , getLicensesRequest, statusRolRequest} from "../api/Roles";

const RolesContext = createContext();

export const useRoles = () => {
    const context = useContext(RolesContext);
    return context;
};

export function RolesProvider({children}) {
    const [roles , setRoles] = useState([]);
    const [licenses, setLicenses] = useState([]);

    const getRoles = async () => {
        try {
            const res = await getRolesRequest();
            setRoles(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getLicenses = async () => {
        try {
            const res = await getLicensesRequest();
            setLicenses(res.data);
        } catch (error) {
            console.log(error)
            throw new Error(error.message);
        }
    };

    const createRol = async (roles) => {
        try {
            const res = await createRolRequest(roles);
            toast.success('Rol registrado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            }); 
            getRoles();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const statusRol = async (idRol) => {
        try {
            const res = await statusRolRequest(idRol);
            toast.success('Estado actualizado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            }); 
            getRoles();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };


    const deleteRol = async (idRol) => {
        try {
             await deleteRolRequest(idRol);
             toast.success('Rol eliminado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            getRoles();
        } catch (error) {
            toast.error( error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    const addLicenses = async (idRol, licenses) => {
        try {
           await addLicensesRequest(idRol, licenses);
        getRoles();
        } catch (error) {
            toast.error( error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    return(
        <RolesContext.Provider 
        value={{roles, licenses, getRoles, createRol, deleteRol, statusRol, getLicenses, addLicenses}}>
            {children}
        </RolesContext.Provider>
    )
}