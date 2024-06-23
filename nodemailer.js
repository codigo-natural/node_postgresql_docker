import nodemailer from 'nodemailer';
import config from './config/index.js';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: config.mailUser, // sender address
    to: config.mailUser, // list of receivers
    subject: 'Este es un nuevo correo personalizado', // Subject line
    text: 'Hola camilo, eres un crak', // plain text body
    html: 'Hola camilo, eres un crak', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main();
