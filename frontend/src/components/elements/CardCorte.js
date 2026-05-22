import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "./card.css"

function CardCorte({ id, setCard }) {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [itemCard, setItemCard] = useState()

  useEffect(()=>{
    async function getItemCard(id) {
      try {
        const response = await axios.get(`http://localhost:4000/cortes/${id}`)
        setItemCard(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getItemCard(id)
  }, [itemCard, id])

  function editarCorte(id) {
    try {
      navigate(`/editar-corte/${id}`)
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  async function deletarCorte(id) {
    try {
      await axios.delete(`http://localhost:4000/cortes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate(0)
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  function fecharCard() {
    setCard(null)
  }

  return (
    <div className="background">
      <div className="card">
        <div className="dois">
          <h1>Corte: { itemCard?.nome }</h1>
          <i onClick={()=>deletarCorte(itemCard._id)} className="fa-solid fa-trash fa-lg"></i>
        </div>
          <p><strong>Preço:</strong> R${itemCard?.preco}</p>
          <p><strong>Descrição:</strong> { itemCard?.descricao }</p>
          <button onClick={()=>editarCorte(itemCard._id)} className="blue">Editar</button>
          <button onClick={fecharCard} className="red">Fechar</button>
      </div>
    </div>
  )
}

export default CardCorte