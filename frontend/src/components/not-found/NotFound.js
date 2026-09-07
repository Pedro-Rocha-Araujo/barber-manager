import { useNavigate } from "react-router-dom"
import "./not-found.css"

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="background">
      <section className="not-found">
        <h1><i className="fa-solid fa-triangle-exclamation"></i> Erro!</h1>
        <p>A página atual não foi encontrada.</p>
        <button onClick={()=>navigate("/agendamento")}>Ir para a home</button>
      </section>
    </div>
  )
}

export default NotFound