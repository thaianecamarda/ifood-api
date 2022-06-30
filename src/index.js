const express = require("express");

const app = express();

const restaurantes = []

app.get('/', (req, res) => {
    res.send('Ifood API')
})

app.post('/restaurante', (req, res) => {
    const { nome, endereco } = req.body

    const novoRestaurante = {
        id: restaurante.length + 1,
        nome: nome,
        endereco: endereco,
        cardapio: []
    }
    restaurantes.push(novoRestaurante)

    res.status(201).json(novoRestaurante)
})

app.listen(3333, () => {
    console.log("API rodando na porta 3333")
})
