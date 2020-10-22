const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    descricao: {type: String, required: true},
    natureza: {type: String, required: true},
    valor: {type: Number, required: true}  
})

/* 
    Parêmetros do método mongoose.model()
    1º -> Nome do modelo (sempre igual a do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Cristal', esquema, 'cristal')  // 3 parâmetros