import React,{useEffect} from 'react'
import { useAuth } from '../Login/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export function ProtectedRoute() {
    const { isAutenticated, loading } = useAuth();
    const navigate = useNavigate();
 
    useEffect(() => {
        if (!loading && !isAutenticated) {
            navigate('/');
        }
    }, [isAutenticated, loading, navigate]);
 
    return <Outlet/>;
 }
