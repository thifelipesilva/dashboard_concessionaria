const express = require('express');
const routes = require('./src/routes');
const cors = require('cors')

const porta = process.env.PORT || 8000;
const app = express();
app.use(cors());
routes(app);

app.listen(porta, () => console.log('Ouvindo na porta 8000'));

module.exports = app;