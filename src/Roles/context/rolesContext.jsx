import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createRolRequest, getRolRequest, getRolesRequest, updateRolRequest , deleteRolRequest } from "../api/Roles";

const RolesContext = createContext();

export const useRoles = () => {
    const context = useContext(RolesContext);
    return context;
};

export function RolesProvider({children}) {
    const [roles , setRoles] = useState([]);

    const getRoles = async () => {
        try {
            const res = await getRolesRequest();
            setRoles(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getRol = async (roles) => {
        try {
            const res = await getRolRequest();
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createRol = async (roles) => {
        try {
            const res = await createRolRequest(roles);
            toast.success('Rol creado con exito!',{
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

    const updateRol = async (idroles, roles) => {
        try {
            await updateRolRequest(idroles, roles);
            toast.success('Rol modificado con exito.',{
                position: toast.POSITION.TOP_CENTER
            });
            getRoles();
        } catch (error) {
            toast.error( error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const deleteRol = async (roles) => {
        try {
             await deleteRolRequest(roles);
             toast.success('Rol eliminado con exito.',{
                position: toast.POSITION.TOP_CENTER
            });
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
        value={{roles, getRol, getRoles, createRol, updateRol, deleteRol}}>
            {children}
        </RolesContext.Provider>
    )
}