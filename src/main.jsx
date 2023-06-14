import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import { PostsProvider } from './Contexts/PostsProvider.jsx';
import { UsersProvider } from './Contexts/UsersProvider.jsx';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <UsersProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </UsersProvider>
      </Router>
    </ChakraProvider>


  </React.StrictMode>,
)
