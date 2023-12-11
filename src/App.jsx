import { BrowserRouter , Routes, Route, useLocation} from "react-router-dom";
import { Login } from "./Login/Pages/Login.jsx";
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
import { Exchangues } from "./Exchangues/pages/Exchangues.jsx";
import {Roles} from "./Roles/pages/Roles.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./Login/context/AuthContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { ExchangeProvider } from "./Exchangues/context/ExchangeContext.jsx";
import { CreateExchange } from "./Exchangues/components/CreateExchange.jsx";
import { Navigation } from "./components/globalComponents/Navigation.jsx";
import { ForgotPassword } from "./Login/components/ForgotPassword.jsx";
import { Resetpassword } from "./Login/components/Resetpassword.jsx";
import { Brands } from "./Vehicles/pages/Brands.jsx";
import { Manuals } from "./Manuals/pages/Manuals.jsx";
import { DashboardManual } from "./Manuals/components/DashboardManual.jsx";
import { ClientsManual } from "./Manuals/components/ClientsManual.jsx";
import { ExchangesManual } from "./Manuals/components/ExchangesManual.jsx";
import { ImprovementsManual } from "./Manuals/components/ImprovementsManual.jsx";
import { LoginManual } from "./Manuals/components/LoginManual.jsx";
import { PurchasesManual } from "./Manuals/components/PurchasesManual.jsx";
import { RolesManual } from "./Manuals/components/RolesManual.jsx";
import { SalesManual } from "./Manuals/components/SalesManual.jsx";
import { UsersManual } from "./Manuals/components/UsersManual.jsx";
import { VehiclesManual } from "./Manuals/components/VehiclesManual.jsx";


function Navigator (){
  const location = useLocation();
  return location.pathname !== "/" && location.pathname !== "/ForgotPassword" && location.pathname !== "/ResetPassword" &&  <Navigation/> ;
};

function App() { 

  return (
    <>
      <AuthProvider>
        <RolesProvider>
        <VehicleProvider>
          <PurchaseProvider>
          <ClientProvider>
          <ExchangeProvider>
          <SellProvider>
          <UserProvider>
          <ImprovementProvider>       
                        <BrowserRouter>
                        <div>
                          {<Navigator/>}
                            <Routes>
                              <Route path='/' element={<Login/>}/>
                              <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
                              <Route path='/ResetPassword' element={<Resetpassword/>}/>
                              
                              <Route element={<ProtectedRoute/>}>
                                <Route path='/Users' element={<Users/>}/>
                                <Route path='/Roles' element={<Roles/>}/>
                                <Route path='/Clients' element={<Clients/>}/>
                                <Route path='/Sells' element={<Sells/>}/>
                                <Route path='/Vehicles' element={<Vehicles/>}/>
                                <Route path='/Brands' element={<Brands/>}/>
                                <Route path='/Purchases' element={<Purchases/>}/>
                                <Route path="/Improvements" element={<Improvements/>}/>
                                <Route path="/DashBoard" element={<DashBoard/>}/>
                                <Route path="/Exchangues" element={<Exchangues/>}/>
                                <Route path="/Exchangues/create" element={<CreateExchange/>}/>
                                
                                <Route path="/Manuals" element={<Manuals/>}/>
                                <Route path="/Manuals/Login" element={<LoginManual/>}/>
                                <Route path="/Manuals/Dashboard" element={<DashboardManual/>}/>
                                <Route path="/Manuals/Roles" element={<RolesManual/>}/>  
                                <Route path="/Manuals/Users" element={<UsersManual/>}/>     
                                <Route path="/Manuals/Clients" element={<ClientsManual/>}/>     
                                <Route path="/Manuals/Vehicles" element={<VehiclesManual/>}/>     
                                <Route path="/Manuals/Purchases" element={<PurchasesManual/>}/>     
                                <Route path="/Manuals/Sales" element={<SalesManual/>}/>     
                                <Route path="/Manuals/Exchanges" element={<ExchangesManual/>}/>     
                                <Route path="/Manuals/Improvements" element={<ImprovementsManual/>}/>      
                                
                              </Route>                    
                            </Routes>
                          <ToastContainer/> 
                          </div>      
                        </BrowserRouter>
            </ImprovementProvider>
            </UserProvider>
            </SellProvider>
            </ExchangeProvider>
            </ClientProvider>
            </PurchaseProvider>
          </VehicleProvider>
          </RolesProvider>
      </AuthProvider>
    </>
  )
}

export default App
