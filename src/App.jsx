import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../src/Login/Pages/Login.jsx";
import { Users } from "./Users/Pages/Users.jsx";
import { UserProvider } from "../src/Users/Context/userContext.jsx";

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
