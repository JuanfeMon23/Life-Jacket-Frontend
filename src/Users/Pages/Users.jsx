import { useEffect} from "react";
import { Title } from "../../components/globalComponents/Title";
import { useUsers } from "../Context/userContext";
import { useRoles } from "../../Roles/context/rolesContext";
import {TableUsers} from "../components/TableUsers";
import { useAuth } from '../../Login/context/AuthContext';
import { useNavigate } from 'react-router-dom';




export function Users() {
      const {getUsers} = useUsers();
      const {getRoles} = useRoles();
      const {user} = useAuth();
      const navigate = useNavigate();

      useEffect(() => {
        async function verificate(){
          if(!user.Licenses.includes('Usuarios')){
            navigate('/DashBoard');
          }
        }
        verificate();
      },[])
      
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