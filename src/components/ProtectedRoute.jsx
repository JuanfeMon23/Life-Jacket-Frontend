import React from 'react'
import { useAuth } from '../Login/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export  function ProtectedRoute() {
    const { isAutenticated, loading} = useAuth();
    const navigate = useNavigate();

    if(!loading && !isAutenticated) return navigate('/')
  
    return <Outlet/>


}
