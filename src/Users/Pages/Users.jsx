import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { UserRegister } from "../components/userRegister";
import { useUsers } from "../Context/userContext";
import { UserCard } from "../components/userCard";

export function Users() {
      const {users, getUsers} = useUsers();

      useEffect(() => {
        getUsers();
      },[]);


    return (
      <div className='flex'>
          <Navigation/>
          {<Title Title='Usuarios'/>}
          <UserRegister/>

          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2 bg-slate-500 ">
            {users.map((user) => (
              <UserCard  key={user.id} user={user} />
            ) )}
          </div>
          
      </div>
    )
  }