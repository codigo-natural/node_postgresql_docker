import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import config from '../config/index.js';
import UserService from '../services/user.service.js';

const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
    res.json({
      user,
      token,
    });
  }

  async sendMailRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: config.mailUser,
        pass: config.mailPassword,
      },
    });

    await transporter.sendMail({
      from: config.mailUser, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Este es un nuevo correo personalizado', // Subject line
      text: 'Hola camilo, eres un crak', // plain text body
      html: 'Hola camilo, eres un crak', // html body
    });
    return {
      message: 'Email sent',
    };
  }
}

export default AuthService;
