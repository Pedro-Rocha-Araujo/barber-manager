import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import Header from "../elements/Header"
import "./perfil.css"

function PerfilAdmin() {
  const [cortes, setCortes] = useState([])

  const navigate = useNavigate()
  const tokenLs = localStorage.getItem("token")
  const token = jwtDecode(tokenLs)

  function sairConta() {
    localStorage.removeItem("token")
    navigate("/")
  }

  useEffect(()=>{
    async function getCortes() {
      try {
        const response = await axios.get("http://localhost:4000/cortes-do-dia", {
          headers: {
            Authorization: `Bearer ${tokenLs}`
          }
        })
        setCortes(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getCortes()
  }, [tokenLs])

  return (
    <>
      <Header />
      <section className="perfil">

        <div className="perfil">
          <h2><i className="fa-solid fa-user"></i> {token.nome}</h2>
          <label>Email: </label>
          <input disabled value={token.email} />
        </div>

        <div className="agendamentos-hoje">
          <h2><i className="fa-solid fa-calendar"></i> Cortes de Hoje</h2>
          {cortes.length === 0 ? (
            <p>Nenhum corte agendado para hoje até agora</p>
          ): (
            <>
              <h3>Manhã</h3>
              <div className="agendamentos">
                {cortes.map((agendamento)=>{
                  if(agendamento.hora <= 12) {
                    return (
                      <div key={agendamento._id} className="agendamento">
                        <h3>
                          <i className="fa-solid fa-user"></i> {agendamento.usuario.nome}
                        </h3>
                        <p><strong>Horário:</strong> {agendamento.hora}:00</p>
                        <p><strong>Corte:</strong> {agendamento.corte.nome}</p>
                        <button>Excluir</button>
                      </div>
                    )
                  }
                })}

              </div>   
              <hr/>
              <h3>Tarde</h3>
              <div className="agendamentos">
                {cortes.map((agendamento)=>{
                  if(agendamento.hora >= 13) {
                    return (
                      <div key={agendamento._id} className="agendamento">
                        <h3>
                          <i className="fa-solid fa-user"></i> {agendamento.usuario.nome}
                        </h3>
                        <p><strong>Horário:</strong> {agendamento.hora}:00</p>
                        <p><strong>Corte:</strong> {agendamento.corte.nome}</p>
                        <button>Excluir</button>
                      </div>
                    )
                  }
                })}
              </div>
            </>
          )}

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