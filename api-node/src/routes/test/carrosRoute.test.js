const App = require('../../app.js');
const request = require('supertest');
let server;

beforeEach(() => {
    server = new App();
    server.start();
});



describe('Rota de carros', () => {
    it('Deveria retorna uma lista de carros - GET/carros', async () => {
        await request(server).get('/carros').expect(200);
    });
});