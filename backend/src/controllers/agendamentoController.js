import ModelAgendamento from "../models/Agendamento.js"

export async function listarAgendamentos(request, response) {
  try {
    const query = await ModelAgendamento.find().populate("usuario").populate("corte")
    return response.status(200).json(query)
  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao listar os agendamentos!" })
  }
}

export async function listarHorarios(request, response) {
  try {
    const { data } = request.params
    
    const query = await ModelAgendamento.find({ data: data })

    return response.status(200).json(query)

  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao listar os horários" })
  }
}

export async function agendarCorte(request, response) {
  try {
    const { data, hora, corte_id } = request.body
    const id_usuario = request.usuario.id

    if(!data || !hora || !corte_id) {
      return response.status(400).json({ Erro: "Todos os campos são obrigatórios!" })
    }

    const consultaHorario = await ModelAgendamento.findOne({
      data: new Date(data),
      hora: hora
    })

    if(consultaHorario) {
      return response.status(400).json({ Erro: "Horário inválido" })
    }

    await ModelAgendamento.create({
      data: data,
      hora: hora,
      corte: corte_id,
      usuario: id_usuario
    })

    return response.status(201).json({ Mensagem: "Corte agendado!" })

  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao agentar corte!" })
  }
}