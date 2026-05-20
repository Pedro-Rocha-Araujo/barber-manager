import { Router } from "express"
import {
  cadastroUsuario,
  loginUsuario
} from "./controllers/usuarioController.js"

const router = Router()

// Rotas de Seção/Usuário
router.post("/cadastro", cadastroUsuario)
router.post("/login", loginUsuario)

export default router