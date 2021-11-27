const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerUsers = require('./routes/routeUsers');

app.use(bodyParser.json())

app.use('/user', routerUsers)

app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005')
});