import { Router } from "express"
import {
  listarUsuarios,
  cadastroUsuario,
  loginUsuario
} from "./controllers/usuarioController.js"

const router = Router()

// Rotas de Seção/Usuário
router.get("/usuarios", listarUsuarios)
router.post("/cadastro", cadastroUsuario)
router.post("/login", loginUsuario)

export default router