import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import router from './Routing.jsx';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
