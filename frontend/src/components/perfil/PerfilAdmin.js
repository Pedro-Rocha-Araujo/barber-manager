import Header from "../elements/Header"
import "./perfil.css"

function PerfilAdmin() {
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

        <button>Sair</button>

      </section>
    </>
  )
}

export default PerfilAdmin