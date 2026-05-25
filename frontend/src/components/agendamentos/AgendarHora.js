  import { useState, useEffect } from "react"
  import { useParams } from "react-router-dom"
  import { toast } from "react-toastify"
  import axios from "axios"
  import CardHorario from "../elements/CardHorario"

  function AgendarHora() {
    const token = localStorage.getItem("token")
    // Horários de manhã e tarde em forma de array 
    const manha = [8, 9, 10, 11, 12]
    const tarde = [14, 15, 16, 17, 18]
    // Dia pego no useParams
    const { dia } = useParams()
    // Dia que vai para o backend
    const [diaBack, setDiaBack] = useState(null)
    const [horaBack, setHoraBack] = useState(null)
    const [corteSelecionado, setCorteSelecionado] = useState(null)
    // Array com os dias para pegar com o número
    const arrayDias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    // Data de hoje
    const hoje = new Date().getDay()
    // Dia escolhido pelo usuário em forma de número
    const diaEscolhido = arrayDias.indexOf(dia)

    function fecharCard() {
      setHoraBack(null)
    }

    async function agendarCorte(e) {
      e.preventDefault()
      try {
        await axios.post("http://localhost:4000/agendamentos",
        {
          data: diaBack,
          hora: Number(horaBack),
          corte_id: corteSelecionado,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        toast.success("Corte agendado!")
        setHoraBack(null)
      } catch(erro) {
        console.log(erro)
        toast.error("Erro!")
      }
    }


    useEffect(()=>{
      function setarData() {
        const dataCompleta = new Date()
        let diferenca = diaEscolhido - hoje
        if(diferenca < 0) {
          diferenca += 7
        }
        dataCompleta.setDate(dataCompleta.getDate() + diferenca)
        let apenasDia = dataCompleta.toISOString().split("T")[0]
        setDiaBack(apenasDia)
      }
      setarData()
    }, [diaEscolhido, hoje])

    return (
      <section className="agendamento">
        {horaBack && (
          <CardHorario 
            dia={dia} 
            diaBack={diaBack} 
            horaBack={horaBack} 
            fecharCard={fecharCard}
            setCorteSelecionado={setCorteSelecionado}
            agendarCorte={agendarCorte}
          />
        )}
        <h2><i className="fa-solid fa-clock"></i> Escolha o Horário!</h2>
        <form>
          <h3>Manhã</h3>
          {manha.map((hora)=>{
            return (
              <button 
                key={hora} 
                value={hora} 
                type="button"
                onClick={(e)=>setHoraBack(e.target.value)}
              >{hora}:00 - Manhã</button>
            )
          })}
          <hr />
          <h3>Tarde</h3>
          {tarde.map((hora)=>{
            return (
              <button 
                key={hora} 
                value={hora} 
                type="button"
                onClick={(e)=>{
                  setHoraBack(e.target.value)
                }}
              >{hora}:00 - Tarde</button>
            ) 
          })}
        </form>
      </section>
    )
  }

  export default AgendarHora