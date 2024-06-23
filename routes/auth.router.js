import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import config from '../config/index.js';
import AuthService from '../services/auth.service.js';

const router = express.Router();
const service = new AuthService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/recovery' /*, middleware or something*/,
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const rta = await service.sendMailRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
