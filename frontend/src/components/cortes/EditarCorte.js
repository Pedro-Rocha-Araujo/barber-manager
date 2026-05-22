import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./cortes.css"

function EditarCorte() {
  const { id } = useParams()

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState("")

  const token = localStorage.getItem("token")

  useEffect(()=>{
    async function getCorte() {
      try {
        const response = await axios.get("http://localhost:4000/cortes/"+id)
        setNome(response.data.nome)
        setDescricao(response.data.descricao)
        setPreco(response.data.preco)
      } catch(erro) {
        console.log(erro)
      }
    }
    getCorte()
  }, [id])

  async function editarCorte(e) {
    e.preventDefault()
    try {
      if(!token){
        return toast.error("Erro!")
      }

      await axios.put(
        `http://localhost:4000/cortes/${id}`,
        {
          nome: nome,
          descricao: descricao,
          preco: Number(preco)
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        },
      )
      toast.success("Corte Editado!")

    } catch (erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  return (
    <section className="novo-corte">
      <h2><i className="fa-solid fa-scissors"></i> Editar Corte</h2>
      <form onSubmit={editarCorte} className="novo-corte">
        <input type="text" required name="nome" placeholder="Digite o nome do corte" 
          value={nome} onChange={(e)=>setNome(e.target.value)}
        />
        <textarea required name="descricao" placeholder="Faça uma descrição do corte" 
          value={descricao} onChange={(e)=>setDescricao(e.target.value)}  
        />
        <input type="number" required name="preco" placeholder="Digite o valor do corte" 
          value={preco} onChange={(e)=>setPreco(e.target.value)}
        />
        <button>Editar</button>
      </form>
    </section>
  )
}

export default EditarCorte