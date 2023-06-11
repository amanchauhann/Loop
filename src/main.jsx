import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>


  </React.StrictMode>,
)
