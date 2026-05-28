import {Routes, Route } from "react-router-dom"
import RotaPrivada from "./RotaPrivada"
import Login from "./components/secao/Login"
import Cadastro from "./components/secao/Cadastro"
import NovoCorte from "./components/cortes/NovoCorte"
import EditarCorte from "./components/cortes/EditarCorte"
import ListagemCortes from "./components/cortes/ListagemCortes"
import Agendamento from "./components/agendamentos/Agendamento"
import AgendarHora from "./components/agendamentos/AgendarHora"
import PerfilAdmin from "./components/perfil/PerfilAdmin"
import PerfilUser from "./components/perfil/PerfilUser"
import { jwtDecode } from "jwt-decode"

function RouterApp() {
  const tokenLs = localStorage.getItem("token")
  const token = tokenLs ? jwtDecode(tokenLs): (null)

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/novo-corte" element={ <RotaPrivada> <NovoCorte /> </RotaPrivada> } />
      <Route path="/editar-corte/:id" element={<RotaPrivada><EditarCorte /></RotaPrivada>} />
      <Route path="/listagem-cortes" element={<RotaPrivada><ListagemCortes /></RotaPrivada>} />
      <Route path="/agendamento" element={ <RotaPrivada> <Agendamento /> </RotaPrivada> } />
      <Route path="/agendamento/:dia" element={ <RotaPrivada> <AgendarHora /> </RotaPrivada> } />
      <Route path="/perfil" element={ 
        <RotaPrivada> 
          {token?.role === "admin" ? (
            <PerfilAdmin /> 
          ) : (
            <PerfilUser />
          )}
          
        </RotaPrivada> } />
    </Routes>
  )
}

export default RouterApp