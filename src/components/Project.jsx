import { Card, CardHeader, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Project() {
    const [projects, setProjects] = useState(
        [
            {
                projectTitle: 'The Stock-Ness Monster', 
                imageSrc: '/images/stockness.png', 
                projectDescription: 'An inventory management application designed to maintain data integrity.',
                link: 'https://github.com/lindsay-terry/stock-ness-monster',
            },
            {
                projectTitle: 'Blog City Tech',
                imageSrc: '/images/blogcitytech.png',
                projectDescription: 'A CMS-style blog site utilizing the MVC paradigm, Handlebars.js for templating, Express.js for API routes, and Sequelize to connect with a PostgreSQL database.',
                link: 'https://github.com/lindsay-terry/blog-city-tech'
            },
            {
                projectTitle: "What's for Dinner?",
                imageSrc: '/images/whatsfordinner.png',
                projectDescription: 'A front-end application using two server-side APIs to generate meal and drink recipes.',
                link: 'https://github.com/lindsay-terry/whats-for-dinner'
            }
        ]
    );

    return (
        <Card maxW='sm'>
            {/* <CardHeader> Project Title</CardHeader>
            <CardBody>
                <Image src='/images/stockness.png' alt='screenshot of application' borderRadius='lg'/>
                    
                <Text>
                    <p>Project description</p>
                </Text>
            </CardBody>
            <CardFooter>
                Footer
            </CardFooter> */}
            {projects.map((project) => {
                console.log(project);
            })}
        </Card>
    
    );
}