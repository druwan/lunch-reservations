import axios from 'axios';

// Request an access token
let getTokenOptions = {
  method: 'POST',
  url: process.env.ISSUER_BASE_URL + '/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: {
    grant_type: 'client_credentials',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    audience: 'https://lunch-reservation.server.com',
  },
};

axios
  .request(getTokenOptions)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
