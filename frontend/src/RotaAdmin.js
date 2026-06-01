import { jwtDecode } from "jwt-decode"
import { Navigate } from "react-router-dom"

const tokenLs = localStorage.getItem("token")
const token = jwtDecode(tokenLs)

function RotaAdmin ({ children }) {

  if(token.role !== "admin") {
    return <Navigate to="/agendamento" />
  }

  return children
}

export default RotaAdmin