function AgendarHora() {
  return (
    <section className="agendamento">
      <h2><i className="fa-solid fa-clock"></i> Escolha o Horário!</h2>
      <form>
        <h3>Manhã</h3>
        <button type="submit">08:00 - Manhã</button>
        <button type="submit">09:00 - Manhã</button>
        <button className="cheio" type="submit">10:00 - Manhã</button>
        <button type="submit">11:00 - Manhã</button>
        <button type="submit">12:00 - Manhã</button>
        <hr />
        <h3>Tarde</h3>
        <button type="submit">13:00 - Tarde</button>
        <button type="submit">14:00 - Tarde</button>
        <button type="submit">15:00 - Tarde</button>
        <button type="submit">16:00 - Tarde</button>
        <button type="submit">17:00 - Tarde</button>
      </form>
    </section>
  )
}

export default AgendarHora