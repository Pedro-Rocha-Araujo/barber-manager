import { useRef } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import "./secao.css"

function Cadastro() {
  const nomeRef = useRef()
  const emailRef = useRef()
  const senhaRef = useRef()
  const telefoneRef = useRef()

  async function cadastrarUsuario(e) {
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/cadastro", {
        nome: nomeRef.current.value,
        email: emailRef.current.value,
        senha: senhaRef.current.value,
        telefone: telefoneRef.current.value,
      })
      nomeRef.current.value = ""
      emailRef.current.value = ""
      senhaRef.current.value = ""
      telefoneRef.current.value = ""

      toast.success("Usuário cadastrado")
      
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  return (
    <section className="secao-background">

      <div className="secao">

        <div className="cabecalho-secao">
          <h1>Cadastre-se</h1>
        </div>

        <form onSubmit={cadastrarUsuario} className="main-secao">
          <input type="text" required placeholder="Digite seu Nome" 
          ref={nomeRef}
          />
          <input type="email" required placeholder="Digite seu E-mail" 
          ref={emailRef}
          />
          <input type="password" required placeholder="Digite sua Senha" 
          ref={senhaRef}
          />
          <input type="text" required placeholder="Digite seu Telefone" 
          ref={telefoneRef}
          />
          <button>Cadastrar</button>        
        </form>

        <div className="footer-secao">
          <p>Já possui uma conta? <Link to="/">Entrar</Link></p>
        </div>

      </div>

    </section>
  )
}

export default Cadastro