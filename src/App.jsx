import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../src/Login/Pages/Login.jsx";
import { Users } from "./Users/Pages/Users.jsx";
import { Clients } from "./Clients/pages/Clients.jsx";
import { Vehicles } from "./Vehicles/pages/Vehicles.jsx";
import { Sells } from "./Sells/pages/Sells.jsx";
import { Purchases } from "./Purchases/pages/Purchases.jsx";
import { UserProvider } from "../src/Users/Context/userContext.jsx";
import { RolesProvider } from "./Roles/context/rolesContext.jsx";
import { ClientProvider } from "./Clients/context/clientsContext.jsx";
import { ToastContainer } from 'react-toastify';
import { ClientRegister } from "./Clients/components/ClientRegister.jsx";
import { VehicleProvider } from "./Vehicles/context/vehiclesContext.jsx";
import { PurchaseProvider } from "./Purchases/context/purchaseContext.jsx";
import { SellProvider } from "./Sells/context/sellsContext.jsx";
import { ImprovementProvider } from "./Improvements/context/improvementsContext.jsx";
import { DashBoard } from "./Dashboard/pages/DashBoard.jsx";
import { Improvements } from "./Improvements/pages/Improvements.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { EditUser } from "./Users/components/EditUser.jsx";
import {NewNavigation} from "./components/globalComponents/NewNavigation.jsx";


function App() {  
  return (
    <>
      <PurchaseProvider>
      <SellProvider>
      <UserProvider>
      <RolesProvider>
      <ClientProvider>
      <VehicleProvider>
      <ImprovementProvider>
        
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>       
              <Route path='/Users' element={<Users/>}/>
              <Route path='/Users/:idUser' element={<EditUser/>}/>
              <Route path='/Clients' element={<Clients/>}/>
              <Route path='/Sells' element={<Sells/>}/>
              <Route path='/Clients/:idClient' element={<ClientRegister/>}/>
              <Route path='/Vehicles' element={<Vehicles/>}/>
              <Route path='/Purchases' element={<Purchases/>}/>
              <Route path="/Improvements" element={<Improvements/>}/>
              <Route path="/DashBoard" element={<DashBoard/>}/>
              <Route path ='/NewNavbar' element={<NewNavigation/>}/>                
            </Routes>
          <ToastContainer/>       
        </BrowserRouter>
      </ImprovementProvider>
      </VehicleProvider>
      </ClientProvider>
      </RolesProvider>
      </UserProvider>
      </SellProvider>
      </PurchaseProvider>
    </>
  )
}

export default App
