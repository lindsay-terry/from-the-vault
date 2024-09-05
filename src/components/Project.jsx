import { Card, CardHeader, Heading, CardBody, CardFooter, Image, Text, Box, Tooltip } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaSquareGithub } from "react-icons/fa6";
import { VscBrowser } from "react-icons/vsc";
import { motion } from 'framer-motion';

export default function Project({projects, projectIndex}) {
    
    const styles = {
        imageContainer: {
            width: '100%',
            maxWidth: '400px',
            height: '200px',
            marginBottom: '10px',
        },
        customImg: {
            boxShadow: '2px 2px 10px var(--night)',
            opacity: '100%',
        },
        customIcon: {
            fontSize: '30px'
        },
    }

    // Use props to determine which project to display
    const project = projects[projectIndex];

    return (
        <Box>
            <Card maxW='sm'>
                <CardHeader display='flex' justifyContent='center'> 
                    <Heading size='md'>{project.projectTitle}</Heading>
                </CardHeader>
                <CardBody>
                    <Box style={styles.imageContainer}>
                        <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>
                            <motion.div whileHover={{ scale: 1.1 }}>
                            <Image src={project.imageSrc} alt={`Screenshot of ${project.projectTitle}`} borderRadius='lg' style={styles.customImg}/>
                            </motion.div>
                        </a>
                    </Box>
                    <Text>
                        {project.projectDescription}
                    </Text>
                </CardBody>
                <CardFooter display='flex' justifyContent='space-evenly'>
                        <Tooltip label='Github Repository' fontSize='sm' bg='var(--bittersweet)' color='var(--honeydew)' borderRadius='md'>
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'> <FaSquareGithub style={styles.customIcon}/> </a>
                        </Tooltip>
                        <Tooltip label='Live Demo' fontSize='sm' bg='var(--bittersweet)' color='var(--honeydew)' borderRadius='md'>
                            <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'> <VscBrowser style={styles.customIcon}/> </a>
                        </Tooltip>
                </CardFooter>
            </Card>
        </Box>
    );
};

// Using propTypes on projects and projectIndex to ensure an array and a number are required
Project.propTypes = {
    projects: PropTypes.array.isRequired,
    projectIndex: PropTypes.number.isRequired,
};
