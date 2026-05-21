import { Router } from "express"
import {
  listarUsuarios,
  cadastroUsuario,
  loginUsuario
} from "./controllers/usuarioController.js"

import {
  listarCortes,
  listarCorte
} from "./controllers/cortesController.js"

const router = Router()

// Rotas de Seção/Usuário
router.get("/usuarios", listarUsuarios)
router.post("/cadastro", cadastroUsuario)
router.post("/login", loginUsuario)
// Rotas de Corte
router.get("/cortes", listarCortes)
router.get("/corte/:id", listarCorte)

export default router