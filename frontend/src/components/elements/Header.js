import { Link } from "react-router-dom"
import "../../index.css"

function Header() {
  return (
    <header>
      <h1>Barbearia</h1>
      <ul>
        <li> <Link to="/listagem-cortes" >Cortes</Link> </li>
        <li> <Link to="/agendamento" >Agendamento</Link> </li>
        <li> <Link to="/perfil" >Perfil</Link> </li>
      </ul>
    </header>
  )
}

export default Header