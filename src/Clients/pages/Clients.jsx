import { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { useClients } from "../context/clientsContext";
import {TableClients} from "../components/TableClients";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Login/context/AuthContext";


export function Clients() {
    const {getClients} = useClients();
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      async function verificate(){
        if(!user.Licenses.includes('Clientes')){
          navigate('/DashBoard');
        }
      }
      verificate();
    },[])

    useEffect(() => {
      getClients();
    }, [])


    return (    
        <div className="  flex">
          <div>
            {<Title Title='Clientes'/>}
            <div className="">
              <TableClients/>
            </div>

          </div>
           
        </div>
        
    )
  }