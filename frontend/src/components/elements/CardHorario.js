import { useState, useEffect } from "react"
import axios from "axios"
import "./card.css"

function CardHorario({
  dia, horaBack, fecharCard, agendarCorte, setCorteSelecionado
}) {
  const [cortes, setCortes] = useState([])

  useEffect(()=>{
    async function getCortes() {
      const response = await axios.get("http://localhost:4000/cortes")
      setCortes(response.data)
    }
    getCortes()
  }, [])

  return (
    <div className="background">
      <div className="card">
        <h2 className="preto">Escolha o corte:</h2>
        <form onSubmit={agendarCorte}>
          <select onChange={(e)=>setCorteSelecionado(e.target.value)}>
            <option disabled selected>Escolher...</option>
            {cortes.map((corte)=>{
              return <option key={corte._id} value={corte._id}>{corte.nome} - R${corte.preco}</option>
            })}
            
          </select>
          <div className="form">
            <h2 className="preto">Deseja confirmar seu corte para:</h2>
            <span><strong>Dia:</strong> {dia}</span><br/>
            <span><strong>Horário:</strong> {horaBack}:00</span>
          </div>
          <button type="submit" className="blue">Confirmar</button>
          <button type="button" onClick={fecharCard} className="red">Cancelar</button>
        </form>
      </div>
    </div>
  )
}

export default CardHorario