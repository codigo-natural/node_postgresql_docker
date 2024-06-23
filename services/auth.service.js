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
    delete user.dataValues.recoveryToken;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendRecovery(email) {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        throw boom.unauthorized();
      }
      jwt.verify(user.recoveryToken, config.jwtSecret, (err) => {
        if (!err) throw boom.badRequest(' You already have a active token');
      });
      const payload = { sub: user.id };
      const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15m' });
      const link = `http://myfrontend.com/recovery?token=${token}`;
      await service.update(user.id, { recoveryToken: token });

      const mail = {
        from: config.mailUser, // sender address
        to: `${user.email}`, // list of receivers
        subject: 'email para recuperar contraseña', // Subject line
        // text: 'Hola camilo, eres un crak', // plain text body
        html: `<b>Ingresa a este link => ${link} </b>`, // html body
      };
      const rta = await this.sendMail(mail);
      return rta;
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, { recoveryToken: null, password: hash });
      return { message: 'password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: config.mailUser,
        pass: config.mailPassword,
      },
    });

    await transporter.sendMail(infoMail);
    return {
      message: 'Email sent',
    };
  }
}

export default AuthService;