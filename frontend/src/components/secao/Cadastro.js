import { Link } from "react-router-dom"
import "./secao.css"

function Cadastro() {
  return (
    <section className="secao-background">

      <div className="secao">

        <div className="cabecalho-secao">
          <h1>Cadastro</h1>
        </div>

        <form className="main-secao">
          <input type="text" required placeholder="Digite seu Nome" />
          <input type="email" required placeholder="Digite seu E-mail" />
          <input type="password" required placeholder="Digite sua senha" />
          <input type="text" required placeholder="Digite seu Telefone" />
          <button>Cadastrar</button>        
        </form>

        <div className="footer-secao">
          <p>Já possui uma conta? <Link to="/">Entrar.</Link></p>
        </div>

      </div>

    </section>
  )
}

export default Cadastro