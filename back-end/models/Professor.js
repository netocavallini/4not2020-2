const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    formacao: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    // Índice Único: impede duplicidade de CPFs cadastrados
    cpf: { type: String, required: true, index: { unique: true} },
    rg: { type: String, required: true },
    valor_hora_aula: { type: Number, required: true, min: 15.0, default: 20.75},
    endereco: { type: String, required: true },
    telefone: { type: String, required: true},
    // Índice Único: impede duplicidade de email no cadastrados
    email: { type: String, required: true, index: { unique: true} }
})

/* 
    Parêmetros do método mongoose.model()
    1º -> Nome do modelo (sempre igual a do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Professor', esquema, 'professores')  // 3 parâmetros