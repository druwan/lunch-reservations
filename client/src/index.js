import '@fontsource/yaldevi/600.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';

const slTheme = extendTheme({
  colors: {
    slColor: {
      slRed: '#8D153A',
      slOrange: '#eb7400',
      slYellow: '#ffbe29',
      slGreen: '#00534e',
      slBlue: '#2B334F',
    },
  },
  fonts: {
    heading: 'Yaldevi, sans-serif',
    body: 'Yaldevi, sans-serif',
  },
});

const authDomain = process.env.REACT_APP_AUTH0_DOMAIN;
const authClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={slTheme}>
      <Auth0Provider
        domain={authDomain}
        clientId={authClientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
