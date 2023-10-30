import { useEffect, useState } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { UserRegister } from "../components/userRegister";
import { useUsers } from "../Context/userContext";
import { CardUsers } from "../components/CardUsers";
import { RolesRegister } from "../../Roles/components/rolesRegister";
import { useRoles } from "../../Roles/context/rolesContext";
import { CardRoles } from "../../Roles/components/CardRoles";
import { EditUser } from "../components/EditUser";
import { StatusUser } from "../components/StatusUser";
import { NewNavigation } from "../../components/globalComponents/NewNavigation";

export function Users() {
      const {getUsers, users, setUsers} = useUsers();
      const {getRoles} = useRoles();

      useEffect(() => {
        getUsers();
        getRoles();
      },[]);

      
    return (
      <div className='flex '>
        
        <div>
          {<Title Title='Usuarios'/>}
          
          <div className=" flex justify-between h-10 m-5">
            <p className=" font-bold text-[20px]"> Roles creados</p>
            <RolesRegister/>
          </div>
          <div className=" flex flex-wrap">
            <CardRoles/>
          </div>
          <div className=' w-[99rem] h-1.5 border-3 border-[#252525]'> </div>

          <div className=" flex justify-between h-10 m-5">
            <p className="  font-bold text-[20px]">Usuarios creados</p>
            <UserRegister/>
          </div>

          <div>
            <CardUsers/>
          </div>
          
        </div>
          
      </div>
    )
  }