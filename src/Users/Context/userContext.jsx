import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createUserRequest, getUserRequest, getUsersRequest, updateUserRequest, deleteUserRequest, searchUserRequest, stateUserRequest } from "../api/Users.js";

const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('UserContext debe ser usado con un UserProvider');
    return context;
 };

export function UserProvider ({children}) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            setUsers(res.data);
            
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getUser = async (idUser) => {
        try {
            const res = await getUserRequest(idUser);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const searchUser = async (search) => {
        try {
            const res = await searchUserRequest(search);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createUser = async (user) => {
        try {
            const res = await createUserRequest(user);
            toast.success('Usuario Creado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getUsers();
            return res.data;
        } catch (error) {
            console.log(error)
            toast.error('Error al crear un usuario.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const updateUser = async (idUser, user) => {
        try {
            await updateUserRequest(idUser, user);
            toast.success('Usuario actualizado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getUsers();
        } catch (error) {
            console.log(error)
            toast.error('Error al actualizar.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
            
        }
    };

    const statusUser = async (idUser) => {
        try {
            await stateUserRequest(idUser);
            toast.success('Estado actualizado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getUsers();
        } catch (error) {
            toast.error('Error al actualizar el estado.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const deleteUser = async (idUser) => {
        try {
            const res = await deleteUserRequest(idUser);
            if(res.status === 204) setUsers(users.filter((user) => user.id !== idUser));
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <UserContext.Provider
        value={{users,getUser,getUsers,createUser,updateUser,deleteUser,searchUser, statusUser
        }}
        >
            {children}         
        </UserContext.Provider>
    );


}