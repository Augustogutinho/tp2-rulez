const port = 8080;
const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));


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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Conectado com Sucesso ao MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


let fileData = JSON.parse(fs.readFileSync(`users.json`));

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

app.post("/salvar", (req, res) => {
  let nomeuser = req.body.nm;
  let locuser = req.body.loc;
  let valuser = req.body.val;
  let teluser = req.body.tel;

  let cd = { nm: nomeuser, loc: locuser, val: valuser, tel: teluser };

  fileData.push(cd);
  resultado = fs.writeFileSync(`users.json`, JSON.stringify(fileData));
  res.render("ty", { resultado });
});
console.log("servidor funcionando na porta:", port);
app.listen(port);
