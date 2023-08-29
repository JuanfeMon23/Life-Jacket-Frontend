import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { UserRegister } from "../components/userRegister";
import { useUsers } from "../Context/userContext";
import { CardUsers } from "../components/CardUsers";
import { RolesRegister } from "../../Roles/components/rolesRegister";
import { useRoles } from "../../Roles/context/rolesContext";
import { CardRoles } from "../../Roles/components/CardRoles";

export function Users() {
      const {getUsers} = useUsers();
      const {getRoles} = useRoles();

      useEffect(() => {
        getUsers();
      },[]);

      useEffect(() => {
        getRoles();
      },[]);


    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Usuarios'/>}
          
          <UserRegister/>
          <RolesRegister/>

          <div className=" flex flex-wrap">
            <CardRoles/>
          </div>
          
          <div className="flex flex-wrap">
            <CardUsers/>
          </div>
          
        </div>
          
      </div>
    )
  }