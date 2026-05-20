import {Routes, Route } from "react-router-dom"
import RotaPrivada from "./RotaPrivada"
import Login from "./components/secao/Login"
import Cadastro from "./components/secao/Cadastro"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/home" element={ <RotaPrivada> <Cadastro /> </RotaPrivada> } />
    </Routes>
  )
}

export default RouterApp