import { Schema, model } from "mongoose"

const SchemaAgendamento = Schema({
  data: { 
    type: Date, 
    required: true 
  },

  hora: { 
    type: Number, 
    required: true 
  },

  status: { 
    type: String, 
    required: true, 
    enum: ["agendado", "cancelado", "finalizado"],
    default: "agendado"
  },

  corte: {
    type: Schema.Types.ObjectId,
    ref: "corte",
    required: true
  },

  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true
  }
})

const ModelAgendamento = model("agendamento", SchemaAgendamento)

export default ModelAgendamento