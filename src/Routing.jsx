import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './endpoints/Error';
import About from './endpoints/About';
import Contact from './endpoints/Contact';
import Portfolio from './endpoints/Portfolio';
import Resume from './endpoints/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
        ],
    },
]);

export default router;