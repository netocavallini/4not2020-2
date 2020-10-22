const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    celular: { type: String, required: true, default: 13},
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
module.exports = mongoose.model('Cadastro', esquema, 'cadastro')  // 3 parâmetros