import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../src/Login/Pages/Login.jsx";
import { Users } from "../src/Users/pages/Users.jsx";
import { UserProvider } from "../src/Users/Context/userContext.jsx";
import { User } from "@nextui-org/react";


function App() {  
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Users' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
