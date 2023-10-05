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

export function Users() {
      const {getUsers, users, setUsers} = useUsers();
      const {getRoles} = useRoles();

      useEffect(() => {
        getUsers();
        getRoles();
      },[]);

      useEffect(() => {
        if(UserRegister === true || EditUser === true || StatusUser === true){
          Users()
        }
      }, [])
         
    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Usuarios'/>}
          
          <div className=" flex justify-between h-10 m-5">
            <p className=" font-bold text-[20px]"> Roles creados</p>
            <RolesRegister/>
          </div>
            <CardRoles/>
          <div className=" flex flex-wrap">
          </div>
          <div className=' w-[99rem] h-1.5 border-3 border-[#252525]'> </div>

          <div className=" flex justify-between h-10 m-5">
            <p className="  font-bold text-[20px]"> Usuarios creados</p>
            <UserRegister/>
          </div>

          <div>
            <CardUsers/>
          </div>
          
        </div>
          
      </div>
    )
  }