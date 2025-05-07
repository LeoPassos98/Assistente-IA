const { sendWhatsAppMessage } = require('../services/twilioService');

// Aqui você está usando desestruturação para pegar os campos From e Body
//  que chegam no corpo da requisição (req.body).

/* Exemplo de req.body esperado:
{
  "From": "+5531999999999",
  "Body": "Olá, tudo bem?"
}*/

const handleWebhook = async (req, res) => {
  const { From, Body } = req.body;

  console.log('Mensagem recebida:');
  console.log('De:', From);
  console.log('Texto:', Body);

  /*  // Envia uma resposta HTTP simples (status 200 OK por padrão),
      //  informando que a mensagem foi processada.
      res.send('Mensagem recebida com sucesso!');*/
  

  // Simulando resposta de IA 
  const respostaIA = `Você disse: "${Body}"`;


  await sendWhatsAppMessage(From, respostaIA);

  // Responde ao Twilio
  res.status(200).send('Mensagem processada com sucesso!');
};

// Exporta a função como um objeto, para que ela possa ser
//  usada em outros arquivos (como no routes.js):
module.exports = { handleWebhook };