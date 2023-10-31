import React from 'react'
import { useAuth } from '../Login/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export  function ProtectedRoute() {
    const {data, autenticated, loading} = useAuth();

    if (loading) return <h1>Cargando...</h1>
    if(!loading && !autenticated) return <Navigate to='/' replace/>
  
    return <Outlet/>

}
