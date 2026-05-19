import { Link } from "react-router-dom"
import "./secao.css"

function Login() {
  return (
    <section className="secao-background">

      <div className="secao">

        <div className="cabecalho-secao">
          <h1>Login</h1>
        </div>

        <form className="main-secao">
          <input type="email" required placeholder="Digite seu E-mail" />
          <input type="password" required placeholder="Digite sua senha" />
          <button>Entrar</button>        
        </form>

        <div className="footer-secao">
          <p>Não possui um cadstro? <Link to="/cadastro">Cadastrar-se.</Link></p>
        </div>

      </div>

    </section>
  )
}

export default Login