import { Router } from "express"

const router = Router()

router.get("/teste", (request, response)=>{
  response.status(200).json({ Mensagem: "Rota fucionando!" })
})

export default router