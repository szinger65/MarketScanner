import react from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import NotFound from "./pages/notfound"
import Home from "./pages/home"
import ProtectedRoute from "./components/ProtectedRoute"
import Marketplace from "./pages/marketplace" 

function LogOut() {
  localStorage.clear()
  return <Navigate to="/login" />
}


function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
} //neffff
function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route 
            path="/"
            element={<Home />} /> 
          <Route path="/marketplace" element={
             <ProtectedRoute>
              <Marketplace />
            </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound/>} />
         </Routes>
    </BrowserRouter>
  )
}

export default App
