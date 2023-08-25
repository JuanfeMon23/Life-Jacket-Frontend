import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../src/Login/Pages/Login.jsx";
import { Users } from "./Users/Pages/Users.jsx";
import { Clients } from "./Clients/pages/Clients.jsx";
import { UserProvider } from "../src/Users/Context/userContext.jsx";
import { RolesProvider } from "./Roles/context/rolesContext.jsx";

function App() {  
  return (
    <>
      <UserProvider>
      <RolesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            
              <Route path='/Users' element={<Users/>}/>
              <Route path='/Clients' element={<Clients/>}/>
            
            
          </Routes>
          
        </BrowserRouter>
      </RolesProvider>
      </UserProvider>
    </>
  )
}

export default App
