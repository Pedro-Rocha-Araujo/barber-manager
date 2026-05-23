import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./agendamento.css"

function Agendamento() {
  const arrayDias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
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
      <h2><i className="fa-solid fa-alarm-clock"></i> Agendar Corte</h2>
      <form>
        <h3>Escolha o dia</h3>

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