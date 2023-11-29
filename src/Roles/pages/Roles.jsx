import React, { useEffect } from 'react'
import { useRoles } from "../../Roles/context/rolesContext";
import { Title } from "../../components/globalComponents/Title";
import { TableRoles } from '../components/TableRoles';
import { useAuth } from '../../Login/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export  function Roles() {
    const {getRoles} = useRoles();
    const {getLicenses} = useRoles();
    const navigate = useNavigate();
    const {user, loading} = useAuth();


    useEffect(() => {
      async function verificate(){
        if(!user.Licenses.includes('Roles')){
          navigate('/DashBoard');
        }
      }
      verificate();
    },[])

    useEffect(() => {
        getRoles();
        getLicenses();
    },[]);

  return (
    <div className=' flex'>
        <div>
          {<Title Title='Roles'/>}      
          <div className=" flex flex-wrap">
            <TableRoles/>
          </div>               
        </div>
    </div>
  )
}
