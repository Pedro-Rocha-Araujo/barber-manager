import ModelAgendamento from "../models/Agendamento.js"

export async function cortesDoDia(request, response) {
  try {
    const hoje = new Date().toISOString().split("T")[0]

    const query = await ModelAgendamento.find({ 
      data: hoje
    }).populate("usuario").populate("corte").sort({ hora: 1 })

    return response.status(200).json(query)
  } catch(erro){
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao buscar os cortes do dia!" })
  }
}

export async function meusCortes(request, response) {
  try {
    const id = request.usuario.id
    const query = await ModelAgendamento.find({ usuario: id }).populate("corte").populate("usuario").sort({ data: -1, hora: 1 })
    return response.status(200).json(query)
  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao buscar os cortes do dia!" })
  }
}

export async function cancelarAgendamento(request, response) {
  try { 
    const { id_agendamento } = request.params
    const query = await ModelAgendamento.findByIdAndDelete( id_agendamento )
    if(!query) {
      return response.status(404).json({ Erro: "Erro ao deletar o agendamento!" })
    }
    return response.status(200).json({ Mensagem: "Agendamento cancelado com sucesso!" })
  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao cancelar o agendamento!" })
  }
}