import axios from 'axios';

const tokenEndPoint = process.env.AUTH_APP_TOKEN_ENDPOINT;

export const oAuth = (req, res, next) => {
  const code = req.query.code;

  if (!code) {
    return res.status(401).send('Missing auth token');
  }

  const params = new URLSearchParams();
  params.append('grant-type', 'authorization_code');
  params.append('client_id', process.env.AUTH_CLIENT_ID);
  params.append('client_secret', process.env.AUTH_CLIENT_SECRET);
  params.append('code', code);
  params.append('redirect_uri', 'http://localhost:3000');

  axios
    .post(tokenEndPoint, params)
    .then((res) => {
      req.oAuth = res.data;
      next();
    })
    .catch((error) => {
      console.log(error);
      res.status(403).json(`Reason: ${error.message}`);
    });
};
