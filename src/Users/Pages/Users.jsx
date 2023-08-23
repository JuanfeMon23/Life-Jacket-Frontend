import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { UserRegister } from "../components/userRegister";
import { useUsers } from "../Context/userContext";

export function Users() {
      const {Users, getUsers} = useUsers();

      useEffect(() => {
        getUsers();
      },[]);


    return (
      <div className='flex'>
          <Navigation/>
          {<Title Title='Usuarios'/>}
          <UserRegister/>
      </div>
    )
  }