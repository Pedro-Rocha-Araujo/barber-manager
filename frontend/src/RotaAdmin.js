import { jwtDecode } from "jwt-decode"
import { Navigate } from "react-router-dom"


function RotaAdmin ({ children }) {
  const tokenLs = localStorage.getItem("token")
  const token = jwtDecode(tokenLs)
  
  if(!token) {
    return <Navigate to="/" />
  }
  if(token.role !== "admin") {
    return <Navigate to="/agendamento" />
  }

  return children
}

export default RotaAdmin