
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const twilio = require('twilio'); // Importa a biblioteca Twilio

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const sendWhatsAppMessage = async (to, message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: to
        });
        console.log('Mensagem enviada:', response.sid);
    } catch (error) {
        console.error('\nErro ao enviar mensagem!\n', error);
        console.log('\n\n');
    }
};

module.exports = { sendWhatsAppMessage };