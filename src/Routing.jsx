import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './endpoints/Error';
import Home from './endpoints/Home';
import About from './endpoints/About';
import Contact from './endpoints/Contact';
import Portfolio from './endpoints/Portfolio';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            }
        ],
    },
]);

export default router;