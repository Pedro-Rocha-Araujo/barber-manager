import { useRef } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import "./cortes.css"
import Header from "../elements/Header"

function NovoCorte() {
  const nomeRef = useRef()
  const descricaoRef = useRef()
  const precoRef = useRef()

  const token = localStorage.getItem("token")

  async function cadastrarCorte(e) {
    e.preventDefault()
    try {
      if(!token){
        return toast.error("Erro!")
      }

      await axios.post(
        "http://localhost:4000/cortes",
        {
          nome: nomeRef.current.value,
          descricao: descricaoRef.current.value,
          preco: Number(precoRef.current.value)
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        },
      )
      toast.success("Corte Cadastrado!")
      nomeRef.current.value = ""
      descricaoRef.current.value = ""
      precoRef.current.value = ""

    } catch (erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  return (
    <>
      <Header />
      <section className="novo-corte">
        <h2><i className="fa-solid fa-scissors"></i> Adicionar Corte</h2>
        <form onSubmit={cadastrarCorte} className="novo-corte">
          <input type="text" required name="nome" placeholder="Digite o nome do corte" 
            ref={nomeRef}
          />
          <textarea required name="descricao" placeholder="Faça uma descrição do corte" 
            ref={descricaoRef}
          />
          <input type="number" required name="preco" placeholder="Digite o valor do corte" 
            ref={precoRef}
          />
          <button>Cadastrar</button>
        </form>
      </section>
    </>
  )
}

export default NovoCorte