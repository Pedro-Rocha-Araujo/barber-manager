import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import "dotenv/config"
import router from "./src/routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

async function conectarBanco() {
  try {
    await connect(process.env.ROTA_MONGO)
    console.log("Conexão feita com sucesso!")
  } catch {
    console.log("Erro ao conectar o banco!")
  }
}
conectarBanco()

app.listen(4000, ()=>console.log("Servidor rodando!"))