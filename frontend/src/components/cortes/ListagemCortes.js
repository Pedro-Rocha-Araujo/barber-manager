import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import CardCorte from "../elements/CardCorte"
import Header from "../elements/Header"

function ListagemCortes() {

  const [cortes, setCortes] = useState([])
  const [card, setCard] = useState(null)

  useEffect(()=>{
    async function getCortes() {
      try {
        const response = await axios.get("http://localhost:4000/cortes")
        setCortes(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getCortes()
  }, [])

  function acionarCard(id) {
    try {
      setCard(id)
    } catch(erro) {
      console.log(erro)
      setCard(null)
      toast.error("Erro!")
    }
  }

  return (
    <>
      <Header />
      <section className="listagem-cortes">

        { card && (
          <CardCorte id={card} setCard={setCard} />
        ) }

        <h2><i className="fa-solid fa-scissors"></i> Cortes Disponíveis</h2>
        <div className="cortes">

          {cortes.map((corte, index)=>{
            return (
              <div onClick={()=>acionarCard(corte._id)} key={corte._id} className="corte">

                  <h3>{`${corte.nome} - R$${corte.preco}`}</h3>
                  <i className="fa-solid fa-eye fa-xl"></i>

              </div>
            )
          })}

        </div>
      </section>
    </>
  )
}

export default ListagemCortes