import Carousel from '../components/UI/Carousel';
import { Container } from '@chakra-ui/react';

export default function Portfolio() {

    const styles = {
        customBackground: {
            background: 'var(--black)',
            opacity: '0.85',
            borderRadius: '30px'
        }
    }

    // Array of projects to show on portfolio page
    const projects = [
        {
            projectTitle: 'The Stock-Ness Monster', 
            imageSrc: '/images/stockness.png', 
            projectDescription: 'An inventory and small business management application utilizing Handlebars.js for templating, Express.js for routing, and Sequelize to connect with a PostgreSQL database.',
            githubLink: 'https://github.com/lindsay-terry/stock-ness-monster',
            deployedLink : '#',
        },
        {
            projectTitle: 'Blog City Tech',
            imageSrc: '/images/blogcitytech.png',
            projectDescription: 'A CMS-style blog site utilizing the MVC paradigm, Handlebars.js for templating, Express.js for API routes, and Sequelize to connect with a PostgreSQL database.',
            githubLink: 'https://github.com/lindsay-terry/blog-city-tech',
            deployedLink : '#',
        },
        {
            projectTitle: "What's for Dinner?",
            imageSrc: '/images/whatsfordinner.png',
            projectDescription: 'A front-end application using two server-side APIs to generate meal and drink recipes.  Utilizes local storage to save and delete saved meal and drink recipes..',
            githubLink: 'https://github.com/lindsay-terry/whats-for-dinner',
            deployedLink : 'https://lindsay-terry.github.io/whats-for-dinner/',
        }
    ];

    return (
        <Container p={7} my={2} style={styles.customBackground}>
            {/* Pass projects as props to carousel component */}
            <Carousel projects={projects}/>
        </Container>
    );
}