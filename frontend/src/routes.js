import {Routes, Route } from "react-router-dom"
import Login from "./components/secao/Login"
import Cadastro from "./components/secao/Cadastro"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
    </Routes>
  )
}

export default RouterApp