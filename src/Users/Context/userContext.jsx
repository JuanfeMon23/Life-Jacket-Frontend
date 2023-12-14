import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getUsersRequest, updateUserRequest, deleteUserRequest, stateUserRequest } from "../api/Users.js";


const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext);
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


    const updateUser = async (idUser, user) => {
        try {
            await updateUserRequest(idUser, user);
            toast.success('Usuario actualizado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getUsers();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
            
        }
    };

    const statusUser = async (idUser) => {
        try {
            await stateUserRequest(idUser);
            toast.success('Estado actualizado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getUsers();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const deleteUser = async (idUser) => {
        try {
             await deleteUserRequest(idUser);
            toast.success('Usuario eliminado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getUsers();
        } catch (error) {
            toast.success(error.response.data.message,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    return (
        <UserContext.Provider
        value={{users,getUsers,updateUser,deleteUser, statusUser
        }}
        >
            {children}         
        </UserContext.Provider>
    );


}