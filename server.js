const express = require("express")

let app = express()
app.use(express.json());

app.get('/', function(req,res) {
    res.json({rota: '/'})
})

app.get('/produtos', function(req,res) {
  res.json({rota: '/produtos'})
})

app.get('/filmes', function(req,res) {
 var id = req.query['id']
 if(id == null){
   res.statusMessage = "'parametros invalidos'";
  res.status(400).end();
 }else{
  res.json({rota: '/filmes'})
 }
})

app.post('/musica', function(req,res) {
 var json = req.body
 if(json.id == null || json.autor == null || json.genero == null){
   res.statusMessage = "'parametros invalidos'" + req.body;
  res.status(400).end();
 }else{
  res.send(json)
 }
})

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000 ...");
})
