const express = require("express")

const server = express()

// ligando o servidor
server.listen(3000)

// configurar pasta pública
server.use(express.static("public"))

// configurar caminhos na minha aplicação
// página inicial

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})