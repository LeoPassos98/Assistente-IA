// Importa o Express para usar suas funcionalidades.
const express = require('express');

// Cria um objeto de roteador separado.
// Ele funciona como um mini-servidor que lida com rotas específicas.
const router = express.Router();

//Importa a lógica da rota, 
// que provavelmente está no arquivo webhookController.js.
const webhookController = require('./controllers/webhookController');

// Define uma rota POST /webhook,
//  e delega o que acontece nessa rota para a função handleWebhook.
router.post('/webhook', webhookController.handleWebhook);

// Exporta o router 
// para que possa ser usado no arquivo principal (server.js ou app.js).
module.exports = router;