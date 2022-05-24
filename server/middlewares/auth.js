import axios from 'axios';

const tokenEndPoint = 'https://karapincha.eu.auth0.com/oauth/token';

const auth = (req, res, next) => {
  const code = req.query.code;

  if (!code) {
    res.status(401).send('Missing Authorization Code');
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('client_id', process.env.AUTH_CLIENT_ID);
  params.append('client_secret', process.env.AUTH_CLIENT_SECRET);
  params.append('code', code);
  params.append('redirect_uri', 'http://localhost:3000/authorization');

  axios
    .post(tokenEndPoint)
    .then((res) => {
      req.auth = res.data;
      next();
    })
    .catch((error) => {
      console.log(error);
      res.status(403).json(`Reason: ${error}`);
    });
};

export default auth;
