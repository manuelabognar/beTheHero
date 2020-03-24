const express = require('express');

const app = express ();

app.get('/', (request, response) => {
  response.json({
    evento: 'Patrick lindo 1.0',
    aluno: 'Manu'
  });
});

app.listen(3333);