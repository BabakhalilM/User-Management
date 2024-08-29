import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { ApicontextProvider } from './components/contextapi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ApicontextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ApicontextProvider>
    </Router>
  </React.StrictMode>
);
