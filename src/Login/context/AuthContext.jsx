import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginRequest, verifyTokenRequest, PasswordRecoveryRequest, resetPasswordRequest } from "../api/Auht";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [loading, setLoading] = useState(true);


    const login = async (data) => {
        try {
            const res = await loginRequest(data);
            setIsAutenticated(true);
            setUser(res.data);
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

    const passwordRecovery = async (userEmail) => {
        try {
            await PasswordRecoveryRequest(userEmail);
            toast.success('En ha enviado un enlace a su correo.' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
              })
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
              })
        }
    };

    const resetPassword = async (idUser, password) => {
        try {
            await resetPasswordRequest(idUser, password);
            toast.success('Contraseña actualizada con exito.' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
              })
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
              })
        }
    };

    

    useEffect(() => {
      async function checkLogin(){
          const cookies = Cookies.get();

          if(!cookies.token) {
              setIsAutenticated(false);
              setLoading(false);
              return setUser(null);
          };

          try {
              const res = await verifyTokenRequest(cookies.token);
              if(!res.data){
                  setIsAutenticated(false);
                  setLoading(false);
                  if(isAutenticated === false) return <Navigate to='/' />
              }

              setIsAutenticated(true);
              setUser(res.data);
              setLoading(false);
          } catch (error) {
              setIsAutenticated(false);
              setUser(null);
          }
      }
      checkLogin();
  }, [])


    
    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAutenticated(false);
    };

    return (
        <AuthContext.Provider value={{user, login, logout, isAutenticated, loading, loading, passwordRecovery, resetPassword} } >
            {children}
        </AuthContext.Provider>
    )
};