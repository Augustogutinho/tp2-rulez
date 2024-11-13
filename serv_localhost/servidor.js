const port = 3000;
const express = require("express");
const fs = require("fs");
var path = require('path');

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("public", express.static(path.join(__dirname, "/public")));
app.set('views', path.join(__dirname, '/views'));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://DaviJorge:Garrison2020@cluster.eckz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



//let fileData = JSON.parse(fs.readFileSync(`users.json`));

app.get("/", (requisicao, resposta) => {
  resposta.render("index");
});
app.get("/barra", (requisicao, resposta) => {
  resposta.render("barra");
});
app.get("/JF", (requisicao, resposta) => {
  resposta.render("JF");
});
app.get("/login", (requisicao, resposta) => {
  resposta.render("login");
});
app.get("/visgueiro", (requisicao, resposta) => {
  resposta.render("visgueiro");
});

app.post("/salvar", async (req, res) => {
  let nomeuser = req.body.nm;
  let locuser = req.body.loc;
  let valuser = req.body.val;
  let teluser = req.body.tel;

  let cd = { nm: nomeuser, loc: locuser, val: valuser, tel: teluser };

  //fileData.push(cd);
  
  //var resultado = fs.writeFileSync(`users.json`, JSON.stringify(fileData));
  try {
    // Conecta ao banco de dados
    const database = client.db("Cluster"); // Substitua pelo nome do seu banco
    const collection = database.collection("usuarios"); // Substitua pelo nome da sua coleção

    // Insere o novo usuário na coleção "usuarios"
    await collection.insertOne(cd);

    res.render("ty", { resultado: "Usuário salvo com sucesso!" });
  } catch (error) {
    console.error(error);
    res.render("ty", { resultado: "Erro ao salvar no banco de dados." });
  }
  
});
    
console.log("servidor funcionando na porta:", port);
app.listen(port);