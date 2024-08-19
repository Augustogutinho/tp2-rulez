const { render } = require("ejs");
const express = require('express')
const app = express()
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render("index", { n1: "", n2: "", result: "" });
})

app.route("/erro").get((req, res) => {
    res.render("erro");
  });

 app.get('/fronte',(request,response) => {
  var resul = ""
  response.render(`index`, {resul})
})

app
  .route("/res1")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.n1);
    n2 = parseFloat(req.body.n2);

    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    } else {
      result = n1 + n2;
      res.render("index");
    }
  });

  app
  .route("/res2")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.n1);
    n2 = parseFloat(req.body.n2);
    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    } else {
      result = n1 - n2;
      res.render("index");
    }
  });

  app
  .route("/res3")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.n1);
    n2 = parseFloat(req.body.n2);

    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    } else {
      result = n1 * n2;
      res.render("index");
    }
  });

  app
  .route("/res4")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.n1);
    n2 = parseFloat(req.body.n2);

    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    }
    else if(n2==0){
        result = `Não dá para dividir o primeiro número por 0`
        res.redirect("/erro");
    }
     else {
      result = n1 / n2;
      res.render("index");
    }
  });


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