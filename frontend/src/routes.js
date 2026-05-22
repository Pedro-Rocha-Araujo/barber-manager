import {Routes, Route } from "react-router-dom"
import RotaPrivada from "./RotaPrivada"
import Login from "./components/secao/Login"
import Cadastro from "./components/secao/Cadastro"
import NovoCorte from "./components/cortes/NovoCorte"
import EditarCorte from "./components/cortes/EditarCorte"
import ListagemCortes from "./components/cortes/ListagemCortes"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/novo-corte" element={ <RotaPrivada> <NovoCorte /> </RotaPrivada> } />
      <Route path="/editar-corte/:id" element={<RotaPrivada><EditarCorte /></RotaPrivada>} />
      <Route path="/listagem-cortes" element={<RotaPrivada><ListagemCortes /></RotaPrivada>} />
    </Routes>
  )
}

export default RouterApp