import { Strategy, ExtractJwt } from "passport-jwt";
import config from "../../../config/index.js"

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

export default JwtStrategy;
