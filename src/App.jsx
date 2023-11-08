import { BrowserRouter , Routes, Route, useLocation} from "react-router-dom";
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
import { VehicleProvider } from "./Vehicles/context/vehiclesContext.jsx";
import { PurchaseProvider } from "./Purchases/context/purchaseContext.jsx";
import { SellProvider } from "./Sells/context/sellsContext.jsx";
import { ImprovementProvider } from "./Improvements/context/improvementsContext.jsx";
import { DashBoard } from "./Dashboard/pages/DashBoard.jsx";
import { Improvements } from "./Improvements/pages/Improvements.jsx";
import { NewNavigation } from "./components/globalComponents/NewNavigation.jsx";
import { Exchangues } from "./Exchangues/pages/Exchangues.jsx";
import {Roles} from "./Roles/pages/Roles.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./Login/context/AuthContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { ExchangeProvider } from "./Exchangues/context/ExchangeContext.jsx";
import { TableOne } from "./Exchangues/components/Table.jsx";
import { CreateExchange } from "./Exchangues/components/CreateExchange.jsx";


function Navigator (){
  const location = useLocation();
  return location.pathname !== "/" && <NewNavigation />;
};

function App() { 

  return (
    <>
      <AuthProvider>
      <VehicleProvider>
      <ExchangeProvider>
      <PurchaseProvider>
      <SellProvider>
      <UserProvider>
      <RolesProvider>
      <ClientProvider>
      <ImprovementProvider>       
        <BrowserRouter>
        <div className=" flex">
          {<Navigator/>}
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route element={<ProtectedRoute/>}>
                <Route path='/Users' element={<Users/>}/>
                <Route path='/Roles' element={<Roles/>}/>
                <Route path='/Clients' element={<Clients/>}/>
                <Route path='/Sells' element={<Sells/>}/>
                <Route path='/Vehicles' element={<Vehicles/>}/>
                <Route path='/Purchases' element={<Purchases/>}/>
                <Route path="/Improvements" element={<Improvements/>}/>
                <Route path="/DashBoard" element={<DashBoard/>}/>
                <Route path="/Exchangues" element={<Exchangues/>}/>
                <Route path="/Exchangues/create" element={<CreateExchange/>}/>      
                <Route path="/Table" element={<TableOne/>}/>  
              </Route>                    
            </Routes>
          <ToastContainer/> 
          </div>      
        </BrowserRouter>
      </ImprovementProvider>
      </ClientProvider>
      </RolesProvider>
      </UserProvider>
      </SellProvider>
      </PurchaseProvider>
      </ExchangeProvider>
      </VehicleProvider>
      </AuthProvider>
    </>
  )
}

export default App
