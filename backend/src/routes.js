import { Router } from "express"
// imports de Usuário / Seção
import {
  listarUsuarios,
  cadastroUsuario,
  loginUsuario
} from "./controllers/usuarioController.js"
// Imports de Cortes
import {
  listarCortes,
  listarCorte,
  cadastrarCorte,
  editarCorte,
  deletarCorte
} from "./controllers/cortesController.js"
// imports dos Middleares
import {
  checarToken,
  checarAdmin
} from "./middlewares/usuarioMiddlewares.js"

const router = Router()

// Rotas de Seção/Usuário
router.get("/usuarios", listarUsuarios)
router.post("/cadastro", cadastroUsuario)
router.post("/login", loginUsuario)
// Rotas de Corte
router.get("/cortes", checarToken, listarCortes)
router.get("/corte/:id", checarToken, listarCorte)
router.post("/novo-corte", checarToken, checarAdmin, cadastrarCorte)
router.put("/editar-corte/:id", checarToken, checarAdmin, editarCorte)
router.delete("/deletar-corte/:id", checarToken, checarAdmin, deletarCorte)

export default router