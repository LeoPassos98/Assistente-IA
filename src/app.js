// Importa o express (Lembrando que o express é um framework para o node.js)
const express = require('express');

// Criar a aplicação (app) com o express
// O express é um framework para o node.js que facilita a criação de aplicações web e APIs
const app = express();

// Importa as rotas definidas no arquivo routes.js
// Middleware para analisar o corpo da requisição como JSON 
const routes = require('./routes'); 

// Define a porta que o servidor vai usar
// O process.env.PORT é uma variável de ambiente que pode ser definida pelo servidor (ex: Heroku) para definir a porta que o servidor deve usar
// Se a variável de ambiente PORT não estiver definida, usa a porta 3000 (aonde definirmos o servidor para rodar)
const PORT = process.env.PORT || 3000; 


// Middleware para analisar o corpo da requisição como JSON
// O express.json() é um middleware que analisa o corpo da requisição e o transforma em um objeto JSON
// Isso é útil para lidar com requisições que enviam dados no formato JSON (ex: quando o cliente envia dados para o servidor)
app.use(express.urlencoded({ extended: true })); // Para analisar dados de formulários (application/x-www-form-urlencoded)
app.use(express.json()); // Para analisar dados JSON (application/json)

app.use(routes); // Usar as rotas definidas no arquivo routes.js

// Rota básica para teste de funcionamento do servidor
// O app.get() define uma rota para o servidor, que responde a requisições GET na URL raiz ("/")
// A função de callback recebe dois parâmetros: req (request) e res (response), que representam a requisição e a resposta, respectivamente
// A função envia uma resposta de texto "Servidor online!" quando a rota é acessada
app.get('/', (req, res) => {
    res.send('Servidor online!');
});

// Inicia o servidor na porta definida (PORT) e exibe uma mensagem no console quando o servidor está rodando
// O app.listen() inicia o servidor e escuta as requisições na porta definida
// A função de callback exibe uma mensagem no console quando o servidor está rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});