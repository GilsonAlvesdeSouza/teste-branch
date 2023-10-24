const express = require("express");
const produtos = require("../produtos");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  resp.json({ ok: "true" });
});

app.get("/numeros", (req, resp) => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  resp.json({ numeros });
});

app.get("/produtos", (req, resp) => {
  resp.json(produtos);
});

app.listen(3000, () => {
  console.log("Servidor esta rodando na porta 3000");
});
