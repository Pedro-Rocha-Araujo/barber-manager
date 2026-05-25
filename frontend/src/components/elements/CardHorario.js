function CardHorario({dia, diaBack, horaBack, fecharCard}) {
  return (
    <div className="background">
      <div className="card">
        <h1>Deseja confirmar seu corte para:</h1>
        <span><strong>Dia:</strong> {dia}</span>
        <span><strong>Horário:</strong> {horaBack}:00</span>
        <button className="blue">Confirmar</button>
        <button type="button" onClick={fecharCard} className="red">Cancelar</button>
      </div>
    </div>
  )
}

export default CardHorario