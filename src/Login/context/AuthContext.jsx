import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginRequest, verifytokenRequest } from "../api/Auht";

import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export function AuthProvider({children}){
    const [data, setData] = useState(null);
    const [autenticated, setautenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    const login = async (data) => {
        try {
            const res = await loginRequest(data);
            setData(res.data);
            setautenticated(true);
            toast.success('Bienvenid@',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose : 1500
            });

        } catch (error) {
            toast.error(error.response.data.message,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            })
            throw new Error(error.message);
        }
    };


    const logout = () => {
        Cookies.remove("token");
        setData(null);
        setautenticated(false);
    };

    // useEffect(() => {
    //     const checkLogin = async () => {
    //       const cookies = Cookies.get();
    //       if (!cookies.token) {
    //         setautenticated(false);
    //         setLoading(false);
    //         return;
    //       }
    
    //       try {
    //         const res = await verifytokenRequest(cookies.token);
    //         console.log(res);
    //         if (!res.data) return setautenticated(false);
    //         setautenticated(true);
    //         setUser(res.data);
    //         setLoading(false);
    //       } catch (error) {
    //         setautenticated(false);
    //         setLoading(false);
    //       }
    //     };
    //     checkLogin();
    //   }, []);

    return (
        <AuthContext.Provider value={{data, login, logout, autenticated, loading} } >
            {children}
        </AuthContext.Provider>
    )
};