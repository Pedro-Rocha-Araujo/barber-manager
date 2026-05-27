import ModelAgendamento from "../models/Agendamento.js"

export async function cortesDoDia(request, response) {
  try {
    const hoje = new Date().toISOString().split("T")[0]
    const query = await ModelAgendamento.find({ data: hoje }).populate("usuario").populate("corte").sort({ hora: 1 })
    return response.status(200).json(query)
  } catch(erro){
    console.log(erro)
    return response.status(500).json({ Erro: "Erro ao buscar os cortes do dia!" })
  }
}