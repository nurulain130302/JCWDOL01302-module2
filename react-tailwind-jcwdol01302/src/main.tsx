import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import { BrwserRouter } from '@react-router-dom';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
