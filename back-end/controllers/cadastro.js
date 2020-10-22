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

const Cadastro = require('../models/Cadastro')

const controller = {} // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usam os dados que chegam no body da requisição e os 
    //envia ao BD para a criação de um novo objeto
    try {
        await Cadastro.create(req.body)
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        //TTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//Operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try {
        let dados = await Cadastro.find()  // No MongoDB, a operação find() vazia, traz todos os dados cadastrados
        res.send(dados) //Vai com o status HTTP 200: OK
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try{
        // Capturando o parâmetro ID da URL
        const id = req.params.id
        let obj = await Cadastro.findById(id)

        // O objeto existe e foi encontrado
        if(obj) res.send(obj)       //HTTP 200
        //Não encontrando
        else res.status(404).end()  //HTTP 404: Not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try {
        //Isolar o _id do objeto que está sendo alterado
        const id = req.body._id
        
        //Busca e substituição do conteúdo do objeto
        let ret = await Cadastro.findByIdAndUpdate(id, req.body)

        //Se encontrou e atualizou, retornamos HTTP 204: No content
        if(ret) res.status(204).end()
        //Não encontrou o objeto para ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação DELETE, função excluir()
controller.excluir = async (req, res) => {
    try {
    // Isola o ID
    const id = req.body._id

    // Busca pelo id e exclusão
    let ret = await Cadastro.findByIdAndDelete(id)

    // Encontrou e excluiu, HTTP 204: No content
    if(ret) res.status(204).end()
    // Não encontrou, HTTP 404: Not found
    else res.status(404).end()
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller