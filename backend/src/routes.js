import { Router } from "express"
import {
  cadastroUsuario
} from "./controllers/usuarioController.js"

const router = Router()

router.post("/cadastro", cadastroUsuario)

export default router