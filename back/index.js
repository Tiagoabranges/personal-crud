const express = require('express');

const app = express();

const PORT = 3001;
app.get('/', (req, res) => {
  res.status(200).json('funcinei');
});

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
