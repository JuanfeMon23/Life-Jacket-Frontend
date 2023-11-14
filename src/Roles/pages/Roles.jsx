import React, { useEffect } from 'react'
import { useRoles } from "../../Roles/context/rolesContext";
import { Title } from "../../components/globalComponents/Title";
import { TableRoles } from '../components/TableRoles';
export  function Roles() {
    const {getRoles} = useRoles();
    const {getLicenses} = useRoles();

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
