const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  resp.json({ ok: "true" });
});

app.listen(3000, () => {
  console.log("Servidor esta rodando na porta 3000");
});
