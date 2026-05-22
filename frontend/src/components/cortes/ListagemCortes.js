import { useState, useEffect } from "react"
import axios from "axios"

function ListagemCortes() {
  const [cortes, setCortes] = useState([])

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

  return (
    <section className="listagem-cortes">
      <h2>Cortes Disponíveis</h2>
      <div className="cortes">

        {cortes.map((corte, index)=>{
          return (
            <div key={corte._id} className="corte">
              <h3>{corte.nome}</h3>
              <i className="fa-solid fa-eye fa-xl"></i>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ListagemCortes