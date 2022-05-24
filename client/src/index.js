import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

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
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={slTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
