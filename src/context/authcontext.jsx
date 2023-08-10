import { createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{
            isAuthenticated: false,
            user: null,
            login: () => {},
            logout: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}