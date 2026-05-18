import { Schema, model } from "mongoose"

const SchemaAgendamento = Schema({
  data: { type: Date, required: true },
  hora: { type: Number, required: true },
  corte: {
    type: Schema.types.ObjectId,
    ref: "corte" 
  },
  usuario: {
    type: Schema.types.ObjectId,
    ref: "usuario"
  }
})

const ModelAgendamento = model("agendamento", SchemaAgendamento)

export default ModelAgendamento