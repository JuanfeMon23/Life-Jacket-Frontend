import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../src/Login/Pages/Login.jsx";
import { Users } from "./Users/Pages/Users.jsx";
import { Clients } from "./Clients/pages/Clients.jsx";
import { Vehicles } from "./Vehicles/pages/Vehicles.jsx";
import { UserProvider } from "../src/Users/Context/userContext.jsx";
import { RolesProvider } from "./Roles/context/rolesContext.jsx";
import { ClientProvider } from "./Clients/context/clientsContext.jsx";
import { UserRegister } from "./Users/components/userRegister.jsx";
import { ToastContainer } from 'react-toastify';
import { ClientRegister } from "./Clients/components/ClientRegister.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { VehicleProvider } from "./Vehicles/context/vehiclesContext.jsx";

function App() {  
  return (
    <>
      <UserProvider>
      <RolesProvider>
      <ClientProvider>
      <VehicleProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>       
              <Route path='/Users' element={<Users/>}/>
              <Route path='/Users/:idUser' element={<UserRegister/>}/>
              <Route path='/Clients' element={<Clients/>}/>
              <Route path='/Clients/:idClient' element={<ClientRegister/>}/>
              <Route path='/Vehicles' element={<Vehicles/>}/>
                         
          </Routes>
          <ToastContainer/>       
        </BrowserRouter>
      </VehicleProvider>
      </ClientProvider>
      </RolesProvider>
      </UserProvider>
    </>
  )
}

export default App
