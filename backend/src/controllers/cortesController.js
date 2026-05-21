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

export async function cadastrarCorte(request, response) {
  try {
    const { nome, descricao, preco } = request.body

    if(!nome || !descricao || !preco) {
      return response.status(400).json({ Erro: "Todos os campos são obrigatórios!" })
    }

    if(preco <= 0) {
      return response.status(400).json({ Erro: "Preencha o preço corretamente!" })
    }

    await ModelCorte.create({
      nome: nome,
      descricao: descricao,
      preco: Number(preco)
    })

    return response.status(201).json({ Mensagem: "Corte cadastrado com sucesso!" })

  } catch(erro) {
    return response.status(500).json({ Erro: "Erro ao cadastar o corte!" })
  }
}