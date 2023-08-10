import { BrowserRouter, Routes , Route} from "react-router-dom"
import { Login } from "./pages/Login"
import { Users } from "./pages/Users"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Users" element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
