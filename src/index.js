const express = require("express");
const produtos = require("../produtos");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  resp.json({ ok: "true" });
});

app.get("/nomes", (req, resp) => {
  const nomes = ["Pedro", "Paula", "Ana", "Maria"];
  resp.json(nomes);
});

app.get("/produtos", (req, resp) => {
  resp.json(produtos);
});

app.listen(3000, () => {
  console.log("Servidor esta rodando na porta 3000");
});
