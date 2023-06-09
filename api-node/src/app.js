const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const tratador404 = require('./middleware/error/tratador404');
require('dotenv').config();

class App {
    constructor() {
        this.porta = process.env.PORT;
        this.app = express();
        this.app.use(cors());
        routes(this.app);
        this.app.use(tratador404)
    }

    start() {
        this.app.listen(this.porta, () => console.log(`Api rodando na porta: ${this.porta}`));
    }

    
}

module.exports = App;