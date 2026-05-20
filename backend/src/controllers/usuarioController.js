import ModelUsuario from "../models/Usuario.js"
import "dotenv"
import bcrypt from "bcrypt"
import jwt from "json-web-token"

const salt = 10

export async function listarUsuarios(request, response) {
  try {
    const query = await ModelUsuario.find()
    return response.status(200).json(query)
  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao buscar os usuários!" })
  }
}

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

export async function loginUsuario(request, response) {
  try {
    const { email, senha } = request.body

    if(!email || !senha) {
      return response.status(400).json({ Erro: "Campos não preenchidos!" })
    }

    const query = await ModelUsuario.findOne( { email: email } )

    if(!query) {
      return response.status(401).json({Mensagem: "Dados incorretos!"})
    }

    const senhaCriptografada = query.senha

    const checagem = await bcrypt.compare(senha, senhaCriptografada)

    if(!checagem) {
      return response.status(401).json({Mensagem: "Dados incorretos!"})
    }

    const token = jwt.sign({
      id: query._id,
      nome: query.nome,
      email: query.email,
      role: query.role
    }, 
    process.env.SENHA_JWT, 
    {
      expiresIn: "1h"
    })

    return response.status(200).json({ 
      Mensagem: "Login feito com sucesso!",
      token: token 
    })

  } catch(erro) {
    console.log(erro)
    return response.status(500).json({Erro: "Erro ao logar o usuário!"})
  }
}