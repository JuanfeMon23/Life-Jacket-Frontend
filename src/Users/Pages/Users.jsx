import { useEffect} from "react";
import { Title } from "../../components/globalComponents/Title";
import { useUsers } from "../Context/userContext";
import { useRoles } from "../../Roles/context/rolesContext";
import {TableUsers} from "../components/TableUsers";



export function Users() {
      const {getUsers} = useUsers();
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