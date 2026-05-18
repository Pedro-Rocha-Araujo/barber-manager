import { Schema, model } from "mongoose"

const SchemaCorte = Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true }
})

const ModelCorte = model("corte", SchemaCorte)

export default ModelCorte