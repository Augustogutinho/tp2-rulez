const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
  resposta = ""  

 response.render(`conta`)
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