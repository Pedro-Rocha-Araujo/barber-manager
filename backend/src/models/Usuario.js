import { Schema, model } from "mongoose"

const SchemaUsuario = Schema({
  nome: { type: String, required: true},
  email: { type: String, required: true},
  telefone: { type: String, required: true},
  senha: { type: String, required: true},
  hole: { type: String, required: true, default: "user"} // user e admin
})

const ModelUsuario = model("usuario", SchemaUsuario)

export default ModelUsuario