import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { UserRegister } from "../components/userRegister";
import { useUsers } from "../Context/userContext";
import { CardUsers } from "../components/CardUsers";
import { RolesRegister } from "../../Roles/components/rolesRegister";
import { useRoles } from "../../Roles/context/rolesContext";
import { CardRoles } from "../../Roles/components/CardRoles";
import { Navigate } from "react-router-dom";
import { Search } from "../../components/globalComponents/Search";

export function Users() {
      const {getUsers , createUser} = useUsers();
      const {getRoles} = useRoles();

      useEffect(() => {
        getUsers();
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
          <p className=" m-8 font-bold text-[20px]"> Roles creados</p>
          <div className=" flex flex-wrap">
            <CardRoles/>
          </div>
          <div className=' w-[99rem] h-1.5 border-3 border-[#252525]'> </div>
          <p className=" m-8 font-bold text-[20px]"> Usuarios creados</p>
          <Search  label={'Buscar usuario'} placeholder={''} />
          <div className="flex flex-wrap">
            <CardUsers/>
          </div>
          
        </div>
          
      </div>
    )
  }