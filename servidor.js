const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let num1 = 5
    let num2 = 10

 response.send(`A soma de 5 x 10 é igual ${num1 *num2}`)
})
app.listen(8080)