import { expressjwt } from 'express-jwt';
import jwks from 'jwks-rsa';

export const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUTH_API_AUDIENCE,
  issuer: process.env.AUTH_API_DOMAIN,
  algorithms: ['RS256'],
});
