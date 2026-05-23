import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./agendamento.css"

const arrayDias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

function Agendamento() {
  const numeroDia = new Date().getDay()

  const navigate = useNavigate()

  const [dias, setDias] = useState([])

  useEffect(()=>{
    function getDia() {
      let contador = 0
      let contagemDias = numeroDia
      let arrayTemporario = []
      for(contador; contador < 7; contador++){
        arrayTemporario.push(arrayDias[contagemDias])
        contagemDias += 1
      }
      setDias(arrayTemporario)
    }
    getDia()
  }, [numeroDia])


  function agendarHora(endpoint) {
    navigate(`/agendamento/${endpoint}`)
  }
  return (
    <section className="agendamento">
      <h2><i className="fa-solid fa-calendar-day"></i> Escolha o Dia</h2>
      <form>

        {dias.map((dia, index)=>{
          return(
            <button 
              key={index} 
              onClick={()=>agendarHora(dia)} 
              type="button"
              className={dia === "Domingo" ? "cheio" : "vago"}
              disabled={dia === "Domingo"}
            >{dia}</button>
          )
        })}

      </form>
    </section>
  )
}

export default Agendamento