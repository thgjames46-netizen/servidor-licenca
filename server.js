const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota para o UptimeRobot
app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});

// Rota de Validação (App UniTV)
app.all('/validar', (req, res) => {
  const mac = req.query.mac || req.body.mac;
  const chave = req.body.chave;
  console.log(`Validação solicitada para MAC: ${mac} ou Chave: ${chave}`);
  res.json({
    "status": "valida",
    "mensagem": "Licença ativa!"
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
