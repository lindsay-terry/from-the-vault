import Carousel from '../components/Carousel';
import { Container } from '@chakra-ui/react';
// Project images
import stockness from '../assets/images/stockness.png';
import blogcitytech from '../assets/images/blogcitytech.png';
import whatsfordinner from '../assets/images/whatsfordinner.png';
import align from '../assets/images/admincalendar-screenshot.png';
import wd from '../assets/images/wd.png';
import blogcityog from '../assets/images/blogcityog.png';

export default function Portfolio() {

    const styles = {
        customBackground: {
            background: 'var(--night)',
            opacity: '0.95',
            borderRadius: '30px',
            boxShadow: '0px 4px 12px var(--night)',
        }
    }

    // Array of projects to show on portfolio page
    const projects = [
        {
            projectTitle: "Align Manual Therapy",
            imageSrc: align,
            projectDescription: 'A MERN-stack application built for Align Manual Therapy of St. George featuring a custom booking/scheduling algorithm and payment for services using Square and featuring additional administrative features such as user-management.  Log in using sample user credentials: fallshere@email.com - securepassword2 or sample administrator credentials: boss@boss.com - securepassword2',
            githubLink: 'https://github.com/lindsay-terry/align-manual-therapy',
            deployedLink: 'https://align-manual-therapy-production.up.railway.app/'
        },
        {
            projectTitle: 'The Stock-Ness Monster', 
            imageSrc: stockness, 
            projectDescription: 'An inventory and small business management application utilizing Handlebars.js for templating, Express.js for routing, and Sequelize to connect with a PostgreSQL database.',
            githubLink: 'https://github.com/lindsay-terry/stock-ness-monster',
            deployedLink : 'https://stock-ness-monster-production.up.railway.app/',
        },
        {
            projectTitle: 'Blog City Tech',
            imageSrc: blogcitytech,
            projectDescription: 'A CMS-style blog site utilizing the MVC paradigm, Handlebars.js for templating, Express.js for API routes, and Sequelize to connect with a PostgreSQL database.',
            githubLink: 'https://github.com/lindsay-terry/blog-city-tech',
            deployedLink : 'https://blog-city-tech-production.up.railway.app/',
        },
        {
            projectTitle: "What's for Dinner?",
            imageSrc: whatsfordinner,
            projectDescription: 'A front-end application using two server-side APIs to generate meal and drink recipes.  Utilizes local storage to save and delete saved meal and drink recipes.',
            githubLink: 'https://github.com/lindsay-terry/whats-for-dinner',
            deployedLink : 'https://lindsay-terry.github.io/whats-for-dinner/',
        },
        {
            projectTitle: "Weather Dashboard",
            imageSrc: wd,
            projectDescription: 'A front-end weather dashboard application utilizing third party API OpenWeather and local storage to save search data.',
            githubLink: 'https://github.com/lindsay-terry/weather-dashboard',
            deployedLink: 'https://lindsay-terry.github.io/weather-dashboard/'
        },
        {
            projectTitle: 'Blog City',
            imageSrc: blogcityog,
            projectDescription: 'My first blog application using vanilla JS, CSS, and HTML.  Utilizing local storage to store blog posts and remember user preference for light/dark mode.',
            githubLink: 'https://github.com/lindsay-terry/blog-city',
            deployedLink: 'https://lindsay-terry.github.io/blog-city/'
        }

    ];

    return (
        <Container p={7} my={2} style={styles.customBackground}>
            {/* Pass projects as props to carousel component */}
            <Carousel projects={projects}/>
        </Container>
    );
}