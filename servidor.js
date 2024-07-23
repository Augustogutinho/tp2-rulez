const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
  resposta = ""  

 response.render(`conta`)
})
 app.get('/fronte',(request,response) => {
  var resul = ""
  response.render(`cesinha`, {resul})
})

app.post('/res1', (request,response) => {
  let n1 = parseFloat(request.body.n1)
  let n2 = parseFloat(request.body.n2)
  resul = n1 + n2
  response.render(`cesinha`)


})

app.post('/res2', (request,response) => {
  let n1 = parseFloat(request.body.n1)
  let n2 = parseFloat(request.body.n2)
  resul = n1 - n2
  response.render(`cesinha`)


})

app.post('/res3', (request,response) => {
  let n1 = parseFloat(request.body.n1)
  let n2 = parseFloat(request.body.n2)
  resul = n1 * n2
  response.render(`cesinha`)


})

app.post('/res4', (request,response) => {
  let n1 = parseFloat(request.body.n1)
  let n2 = parseFloat(request.body.n2)
  resul = n1 / n2
  response.render(`cesinha`)


})


 app.post('/resultado', (request, response) => {
   let n1 = parseFloat(request.body.n1)
   let n2 = parseFloat(request.body.n2)
   let n3 = parseFloat(request.body.n3)

    resposta = (n2 * n3) / n1
    response.render('conta',{resposta})
 })
const PORTA = 8080
app.listen (PORTA, () => {
    console.log(`Servidor rodando em http://lcalhost:${PORTA}`);
})