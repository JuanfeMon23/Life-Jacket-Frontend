import React from 'react'
import { useAuth } from '../Login/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export  function ProtectedRoute() {
    const { autenticated} = useAuth();

    if( !autenticated) return <Navigate to='/' replace/>
  
    return <Outlet/>


}
