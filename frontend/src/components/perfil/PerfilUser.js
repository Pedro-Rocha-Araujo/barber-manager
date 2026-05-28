import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import Header from "../elements/Header"
import "./perfil.css"

function PerfilUser() {
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
        const response = await axios.get("http://localhost:4000/meus-cortes", {
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
  }, [token])

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
          <h2><i className="fa-solid fa-calendar"></i> Meus Cortes</h2>

          <div className="agendamentos">

            {cortes.map((agendamento)=>{
              return (
                <div key={agendamento._id} className="agendamento">
                  <p><strong>Horário:</strong> {agendamento.hora}:00</p>
                  <p><strong>Corte:</strong> {agendamento.corte.nome}</p>
                  <button>Desmarcar</button>
                </div>
              )
            })}

          </div>

        </div>

        <button onClick={sairConta}>Sair</button>

      </section>
    </>
  )
}

export default PerfilUser