import ModelAgendamento from "../models/Agendamento.js"

export async function agendarCorte(request, response) {
  try {
    const { data, hora, corte_id } = request.body
    const id_usuario = request.usuario

    if(!data || !hora || !corte_id) {
      return response.status(400).json({ Erro: "Todos os campos são obrigatórios!" })
    }

    await ModelAgendamento.create({
      data: data,
      hora: hora,

    })

  } catch(erro) {
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao agentar corte!" })
  }
}