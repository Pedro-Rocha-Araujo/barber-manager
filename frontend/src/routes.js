import {Routes, Route } from "react-router-dom"
import RotaPrivada from "./RotaPrivada"
import Login from "./components/secao/Login"
import Cadastro from "./components/secao/Cadastro"
import NovoCorte from "./components/cortes/NovoCorte"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/novo-corte" element={ <RotaPrivada> <NovoCorte /> </RotaPrivada> } />
    </Routes>
  )
}

export default RouterApp