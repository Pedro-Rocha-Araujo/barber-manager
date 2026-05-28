import { Router } from "express"
// imports de Usuário / Seção
import {
  listarUsuarios,
  cadastroUsuario,
  loginUsuario,
  editarPermissao
} from "./controllers/usuarioController.js"
// Imports de Cortes
import {
  listarCortes,
  listarCorte,
  cadastrarCorte,
  editarCorte,
  deletarCorte
} from "./controllers/cortesController.js"
// Imports de Agendamento
import {
  listarAgendamentos,
  agendarCorte,
  listarHorarios
} from "./controllers/agendamentoController.js"
// imports de Perfil / Dashboard
import {
  cortesDoDia,
  meusCortes
} from "./controllers/perfilController.js"
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
router.put("/editar-permissao/:id", editarPermissao)
// Rotas de Corte
router.get("/cortes", listarCortes)
router.get("/cortes/:id", listarCorte)
router.post("/cortes", checarToken, checarAdmin, cadastrarCorte)
router.put("/cortes/:id", checarToken, checarAdmin, editarCorte)
router.delete("/cortes/:id", checarToken, checarAdmin, deletarCorte)
// Rotas de Agendamento
router.get("/agendamentos", listarAgendamentos)
router.get("/agendamentos/:data", listarHorarios)
router.post("/agendamentos", checarToken, agendarCorte)
// Rotas de Perfil / Dashboard
router.get("/cortes-do-dia", checarToken, checarAdmin, cortesDoDia)
router.get("/meus-cortes", checarToken, meusCortes)

export default router