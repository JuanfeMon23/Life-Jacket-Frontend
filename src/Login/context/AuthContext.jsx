import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginRequest, verifyTokenRequest, PasswordRecoveryRequest, resetPasswordRequest, verifyTokenPasswordRequest } from "../api/Auht";
import Cookies from "js-cookie";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
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
            toast.success('Se ha enviado un token a su correo' ,{
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

    const verifyTokenPassword = async (token) => {
      try {
       const res = await verifyTokenPasswordRequest(token)
       setNewPassword(res.data);
        toast.success('Token valido' ,{
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        })
      } catch (error) {
        toast.error(error.response.data.message ,{
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
          })
      }
    }

    const resetPassword = async (idUser, password) => {
        try {
            await resetPasswordRequest(idUser, password);
            toast.success('Contraseña actualizada con éxito!' ,{
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
        let isMounted = true; 
        async function checkLogin() {
          const cookies = Cookies.get();
          if (!cookies.token) {
            if (isMounted) {
              setIsAutenticated(false);
              setLoading(false);
              setUser(null);
            }
          } else {
            try {
              const res = await verifyTokenRequest(cookies.token);
              if (res.data && isMounted) {
                setIsAutenticated(true);
                setUser(res.data);
                setLoading(false);
              } else if (isMounted) {
                setIsAutenticated(false);
                setLoading(false);
              }
            } catch (error) {
              if (isMounted) {
                setIsAutenticated(false);
                setUser(null);
              }
            }
          }
        }
        checkLogin();
        return () => {
          isMounted = false; 
        };
      }, []);

    console.log(user)

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAutenticated(false);
    };

    return (
        <AuthContext.Provider value={{user, login, logout, isAutenticated, loading, loading, passwordRecovery, resetPassword, verifyTokenPassword, newPassword} } >
            {children}
        </AuthContext.Provider>
    )
};