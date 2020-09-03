const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ementa: {
        type: String,
        required: true
    },
    carga_horaria: {
        type: Number,
        required: true,
        min: 4,
        max: 80
    },
    nivel: {
        type: String,
        required: true,
        enum: ['Básico','Intermidário','Avançado']
    },
    valor_curso: {
        type: Number,
        required: true,
        default: 450,   // Valor assumido se o campo não for preenchido
        min: 50
    }
})

module.exports = mongoose.model('Curso', esquema, 'cursos')  // 3 parâmetros