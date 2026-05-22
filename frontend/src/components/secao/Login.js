import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import "./secao.css"

function Login() {
  const navigate = useNavigate()

  const emailRef = useRef()
  const senhaRef = useRef()

  async function logarUsuario(e) {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: emailRef.current.value,
        senha: senhaRef.current.value
      })
      const token = response.data.token
      localStorage.setItem("token", token)
      navigate("/novo-corte")
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  return (
    <section className="secao-background">

      <div className="secao">

        <div className="cabecalho-secao">
          <h1>Login</h1>
        </div>

        <form onSubmit={logarUsuario} className="main-secao">
          <input type="email" required placeholder="Digite seu E-mail" 
            ref={emailRef}
          />
          <input type="password" required placeholder="Digite sua senha" 
            ref={senhaRef}
          />
          <button>Entrar</button>        
        </form>

        <div className="footer-secao">
          <p>Não possui um cadstro? <Link to="/cadastro">Cadastrar-se</Link></p>
        </div>

      </div>

    </section>
  )
}

export default Login