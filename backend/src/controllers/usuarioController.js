import ModelUsuario from "../models/Usuario.js"
import bcrypt from "bcrypt"

const salt = 10

export async function cadastroUsuario(request, response) {
  try {
    const { nome, email, telefone , senha } = request.body

    if(!nome || !email || !telefone || !senha) {
      return response.status(400).json({Erro: "Todos os campos são obrigatórios!"})
    }

    const verificarEmail = await ModelUsuario.findOne({ email: email })

    if(verificarEmail) {
      return response.status(400).json({ Erro: "E email em questão já possui um cadsatro!" })
    }

    const senhaCriptografada = await bcrypt.hash(senha, salt)

    await ModelUsuario.create({
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senhaCriptografada
    })

    return response.status(201).json({ Mensagem: `Usuário ${nome} cadastrado!` })

  } catch(erro){
    console.log(erro)
    return response.status(500).json({Erro: "Erro ao cadastrar o usuário!"})
  }
}