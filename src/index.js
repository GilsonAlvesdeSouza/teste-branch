const express = require("express");
const produtos = require("../produtos");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  resp.json({ ok: "true" });
});

app.get("/nomes", (req, resp) => {
  resp.json({ ok: "Renata, Rafaela, Gilson" });
});

app.get("/produtos", (req, resp) => {
  resp.json(produtos);
});

app.listen(3000, () => {
  console.log("Servidor esta rodando na porta 3000");
});
