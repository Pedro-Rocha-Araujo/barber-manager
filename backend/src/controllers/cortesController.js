import ModelCorte from "../models/Corte.js"

export async function listarCortes(request, response) {
  try {
    const query = await ModelCorte.find()
    return response.status(200).json(query)
  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao listar os cortes!" })
  }
}

export async function listarCorte(request, response) {
  try {
    const { id } = request.params

    const query = await ModelCorte.findById(id)

    if(!query) {
      return response.status(404).json({ Erro: "Corte não encontrado!" })
    }

    return response.status(200).json(query)
  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao listar os cortes!" })
  }
}