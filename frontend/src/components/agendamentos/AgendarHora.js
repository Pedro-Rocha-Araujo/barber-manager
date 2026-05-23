function AgendarHora() {
  return (
    <section className="agendamento">
      <h2><i className="fa-solid fa-clock"></i> Escolha o Horário!</h2>
      <form>
        <h3>Manhã</h3>
        <button type="button">08:00 - Manhã</button>
        <button type="button">09:00 - Manhã</button>
        <button type="button">10:00 - Manhã</button>
        <button type="button">11:00 - Manhã</button>
        <button type="button">12:00 - Manhã</button>
        <hr />
        <h3>Tarde</h3>
        <button type="button">13:00 - Tarde</button>
        <button type="button">14:00 - Tarde</button>
        <button type="button">15:00 - Tarde</button>
        <button type="button">16:00 - Tarde</button>
        <button type="button">17:00 - Tarde</button>
      </form>
    </section>
  )
}

export default AgendarHora