import { useNavigate } from "react-router-dom"
import Header from "../elements/Header"
import "./perfil.css"

function PerfilAdmin() {

  const navigate = useNavigate()

  function sairConta() {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <>
      <Header />
      <section className="perfil">

        <div className="perfil">
          <h2><i className="fa-solid fa-user"></i> Perfil</h2>
          <label>Email: </label>
          <input disabled value="teste@teste.com" />
        </div>

        <div className="agendamentos-hoje">
          <h2><i className="fa-solid fa-calendar"></i> Cortes de Hoje</h2>

          <div className="agendamentos">

            <div className="agendamento">
              <h3><i className="fa-solid fa-user"></i> Nome: Lucas Andrade da silva</h3>
              <p><strong>Horário:</strong> 9:00</p>
              <p><strong>Corte:</strong> Social</p>
              <button>Excluir</button>
            </div>

          </div>

        </div>

        <button 
          id="blue" type="button" onClick={()=>navigate("/novo-corte")}
        >Adicionar Corte</button>

        <button onClick={sairConta}>Sair</button>

      </section>
    </>
  )
}

export default PerfilAdmin