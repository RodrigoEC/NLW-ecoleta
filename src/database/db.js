// importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose()


// criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

// Utilizar o objeto de banco de dados para nossas operações

db.serialize( () => {

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            image TEXT  NOT NULL,
            adress TEXT NOT NULL,
            adress_number TEXT NOT NULL,
            complement TEXT,
            uf TEXT NOT NULL,
            city TEXT NOT NULL,
            items TEXT NOT NULL
        );
    `)

    const query = `
        INSERT INTO places (
            image,
            name,
            adress,
            adress_number,
            complement,
            uf,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        "https://images.unsplash.com/photo-1544529251-2e43945b92d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        "Coletoria",
        "Guilherme Gemballa, Jardim América",
        "260",
        "",
        "Santa catarina",
        "Rio do Sul",
        "Resíduos eletrônicos e lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }
    // db.run(query, values, afterInsertData)

    db.all(`SELECT name FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão os seus registros")
        console.log(this)
    })
})