import React, { useEffect } from 'react'
import { useRoles } from "../../Roles/context/rolesContext";
import { Title } from "../../components/globalComponents/Title";
import { RolesRegister } from '../components/rolesRegister';
import { CardRoles } from '../components/CardRoles';
export  function Roles() {
    const {getRoles} = useRoles();

    useEffect(() => {
        getRoles();
    },[]);

  return (
    <div className=' flex'>
        <div>
          {<Title Title='Roles'/>}
            <RolesRegister/>       
          <div className=" flex flex-wrap">
            <CardRoles/>
          </div>               
        </div>
    </div>
  )
}
