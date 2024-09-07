import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routing.jsx';
// Importing ChakraProvider and index.css
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
// CSS file holding root variables for colors
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
