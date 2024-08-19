const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    resultado = ''
    response.render('conta')
})

app.post('/soma', (request, response) => {
    soma = parseFloat(request.body.n1) + parseFloat(request.body.n2)
    response.render('conta', {resultado: soma})
})

app.post('/sub', (request, response) => {
    sub = parseFloat(request.body.n1) - parseFloat(request.body.n2)
    response.render('conta', {resultado: sub})
})

app.post('/mult', (request, response) => {
    mult = parseFloat(request.body.n1) * parseFloat(request.body.n2)
    response.render('conta', {resultado: mult}) 
})

app.post('/div', (request, response) => {
    div = parseFloat(request.body.n1) / parseFloat(request.body.n2)
    response.render('conta', {resultado: div})
})

const port = 8080
app.listen(port)
console.log(`O servidor está rodando na porta: ${port}`)