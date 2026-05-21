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
      return response.status(400).json({ Erro: "Preço inválido!" })
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

export async function editarCorte(request, response) {
  try {
    const { id } = request.params

    const { nome, descricao, preco } = request.body

    if(!nome || !descricao || !preco) {
      return response.status(400).json({ Erro: "Todos os campos são obrigatórios!" })
    }

    if(preco <= 0) {
      return response.status(400).json({ Erro: "Preço inválido!" })
    }

    const query = await ModelCorte.findByIdAndUpdate( id, {
      nome: nome,
      descricao: descricao,
      preco: Number(preco)
    })

    if(!query) {
      return response.status(404).json({ Erro: "Corte inválido!" })
    }

    return response.status(200).json({ Mensagem: "Corte atualizado com sucesso!" })

  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao editar o corte!" })
  }
}

export async function deletarCorte(request, response) {
  try {
    const { id } = request.params

    const query = await ModelCorte.findByIdAndDelete(id)

    if(!query) {
      return response.status(404).json({ Erro: "Erro ao deletar o corte!" })
    }

    return response.status(200).json({ Mensagem: "Corte deletado com sucesso!" })

  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao deletar o corte!" })
  }
}