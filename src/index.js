import React from 'react';
import ReactDOM from 'react-dom';
import "styles/index.scss"
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import configureStore from './redux/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={configureStore()}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
