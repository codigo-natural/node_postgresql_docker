import passport from 'passport';
import JwtStrategy from './strategies/jwt-strategy.js';
import LocalStrategy from './strategies/local.strategy.js';

passport.use(LocalStrategy);
passport.use(JwtStrategy);
