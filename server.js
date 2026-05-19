const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.json());

// Rota para o UptimeRobot
app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});

// Rota de Validação (App UniTV)
app.all('/validar', (req, res) => {
  const chave = req.query.chave || req.body.chave;
  try {
    const db = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    if (db.chaves[chave] && db.chaves[chave].status === "valida") {
      res.json({ "status": "valida", "mensagem": "Licença ativa!" });
    } else {
      res.json({ "status": "invalida", "mensagem": "Licença expirada ou inválida!" });
    }
  } catch (error) {
    res.json({ "status": "erro", "mensagem": "Erro no servidor" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
