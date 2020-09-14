/*

Operações básicas sobre dados:

1) CREATE (criação ou inserção)
    Cria um novo objeto dento de um BD

2) RETRIEVE (recuperar ou listar)
    Obter de volta um ou mais objetos pre existente no BD

3) UPDATE (Atualizar)
    Atualização de dados de um objeto pre existente no BD

4) DELETE (exclusão)
    Exclui um objeto do BD

(C)reate + (R)etrieve + (U)pdate + (D)elete = sigra CRUD

========================================================

Verbos do protocolo  HTTP

Verbo                   Operação
POST                    CREATE
GET                     RETRIEVE
PUT                     UPDATE
DELETE                  DELETE

*/

// Controller é um conjunto de funções associadas às operações sobre dados.

const Curso = require('../models/Curso')

const controller = {} // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usam os dados que chegam no body da requisição e os 
    //envia ao BD para a criação de um novo objeto
    try {
        await Curso.create(req.body)
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        //TTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

module.exports = controller