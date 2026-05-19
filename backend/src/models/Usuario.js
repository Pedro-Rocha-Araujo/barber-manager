import { Schema, model } from "mongoose"

const SchemaUsuario = Schema({
  nome: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  telefone: { type: String, required: true},
  senha: { type: String, required: true},
  role: { type: String, enum: ["user", "admin"], default: "user"}
})

const ModelUsuario = model("usuario", SchemaUsuario)

export default ModelUsuario