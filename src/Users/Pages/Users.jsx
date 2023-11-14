import { useEffect, useState } from "react";
import { Title } from "../../components/globalComponents/Title";
import { UserRegister } from "../components/userRegister";
import { useUsers } from "../Context/userContext";
import { CardUsers } from "../components/CardUsers";
import { RolesRegister } from "../../Roles/components/rolesRegister";
import { useRoles } from "../../Roles/context/rolesContext";
import { CardRoles } from "../../Roles/components/CardRoles";
import {TableUsers} from "../components/TableUsers";
import { Navigation } from "../../components/globalComponents/Navigation";


export function Users() {
      const {getUsers, users, setUsers} = useUsers();
      const {getRoles} = useRoles();

      useEffect(() => {
        getUsers();
        getRoles();
      },[]);

      
    return (     
        <div>
          {<Title Title='Usuarios'/>}
          <div className="">
            <TableUsers/>
          </div>
          
        </div>
          
    )
  }