const express = require("express")
const server = express()

//pegar banco de dados
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))


const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da minha aplicação
server.get("/", (req , res)=>{
   return res.render("index.html")
})

server.get("/create-point", (req , res)=>{

   
   return res.render("create-point.html")
})

server.post("/savepoint", (req , res)=>{

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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        res.render("create-point.html", { saved: true })
        console.log("cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData )
})

server.get("/search", (req , res)=>{

   const search = req.query.search

   if(search == ""){
      return res.render("search.html",{total: 0})
   }

   db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
      if(err){
          return console.log(err)
      }
      const total = rows.length
      return res.render("search.html",{places: rows , total})
  })

    
 })
 
//ligar o servidor
server.listen(3000)