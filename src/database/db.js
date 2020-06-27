const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

 /*db.serialize(()=>{    
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );    
    `)
    //inserir dados na tabela

   const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items 
        ) VALUES (
            ?,?,?,?,?,?,?
        );
        `
    const values =  [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gemballa, jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
    }

   // db.run(query, values, afterInsertData )

    //consultar os dados da tabela

    db.all(`SELECT name FROM places`, function(err, row){
        if(err){
            return console.log(err)
        }
        console.log("Aqui eta seu registro")
        console.log(row)
    })
    
    //deletar 
    
    db.all('DELETE from places where id = 3', function(err,){
        if(err){
            return console.log(err)
        }
        console.log("deletade")
    })
})*/



