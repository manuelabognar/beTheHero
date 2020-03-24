const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {

  const body = request.body;

  console.log(body);
  
  response.json({
    evento: 'Patrick lindo 1.1',
    aluno: 'Manu'
  });
});

module.exports = routes;