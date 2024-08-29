import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import router from './Routing.jsx';
// Importing ChakraProvider and index.css
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
// import { Box } from '@chakra-ui/react';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} bg/>
    </ChakraProvider>
  </StrictMode>,
)
