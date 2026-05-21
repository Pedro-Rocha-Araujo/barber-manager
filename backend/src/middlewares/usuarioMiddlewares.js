import jwt from "json-web-token"
import "dotenv/config"

export async function checarToken(request, response, next) {
  try {
    const tokenHeader = request.headers.authorization

    if(!tokenHeader){
      return response.status(401).json({ Erro: "Usuário não está logado!" })
    }

    const token = tokenHeader.split(" ")[1]

    const verificarToken = await jwt.verify(
      token, 
      process.env.SENHA_JWT, 
    )

    request.usuario = verificarToken

    next()
  } catch(erro) {
    console.log(erro)
    return response.status(401).json({ Erro: "Erro ao checar o Token!" })
  }
}

export async function checarAdmin(request, response, next) {
  try {
    const token = request.usuario

    if(token.role != "admin"){
      return response.status(403).json({ Erro: "Usuário não autorizado!" })
    }

    next()

  } catch(erro) {
    console.log(erro)
    return response.status(403).json({ Erro: "usuário não autorizado!" })
  }
}