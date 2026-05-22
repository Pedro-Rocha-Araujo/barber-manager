import { useRef } from "react"
import "./cortes.css"

function NovoCorte() {
  return (
    <section className="novo-corte">
      <h2><i className="fa-solid fa-scissors"></i> Adicionar Corte</h2>
      <form className="novo-corte">
        <input type="text" required name="nome" placeholder="Digite o nome do corte" 

        />
        <textarea required name="descricao" placeholder="Faça uma descrição do corte" 

        />
        <input type="number" required name="preco" placeholder="Digite o valor do corte" 

        />
        <button>Cadastrar</button>
      </form>
    </section>
  )
}

export default NovoCorte