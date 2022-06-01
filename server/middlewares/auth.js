import axios from 'axios';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

export const getToken = async () => {
  const options = {
    headers: {
      'content-type': 'application/json',
    },
    body: {
      client_id: process.env.FRONT_END_CLIENT_ID,
      client_secret: process.env.FRONT_END_CLIENT_SECRET,
      audience: process.env.AUTH_API_AUDIENCE,
      grant_type: 'client_credentials',
    },
  };
  try {
    const token = await axios
      .post(process.env.AUTH_APP_TOKEN_ENDPOINT, options)
      .then((respo) => res.status(200).json(token));
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const checkJwt = auth({
  audience: process.env.AUTH_API_AUDIENCE,
  issuerBaseURL: process.env.AUTH_API_ISSUER_BASE_URL,
});

export const checkScopes = requiredScopes('read:messages');
