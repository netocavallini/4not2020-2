const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {type: String, required: true},
    data: {type: Date, required: true},
    vantagem: {type: mongoose.ObjectId, ref: 'Cadastro', required: true}  
})

/* 
    Parêmetros do método mongoose.model()
    1º -> Nome do modelo (sempre igual a do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Notificacao', esquema, 'notificacao')  // 3 parâmetros