const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota GET para exibir o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota POST para processar o formulário
app.post('/welcome', (req, res) => {
  const { name } = req.body;

  // Validação simples
  if (!name || name.trim() === '') {
    return res.redirect('/');
  }

  res.render('welcome', { name });
});

// Inicializa o servidor
app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000');
});
