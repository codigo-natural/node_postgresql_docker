import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      res.json({
        message: 'Logged in successfully',
        user: req.user,
      });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
