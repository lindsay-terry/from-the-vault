import { Card, CardHeader, CardBody, CardFooter, Image, Text, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Project({projects, projectIndex}) {

        // Use props to determine which project to display
        const project = projects[projectIndex];

    return (
        <Box>
            <Card maxW='sm'>
                <CardHeader> {project.projectTitle}</CardHeader>
                <CardBody>
                    <Image src={project.imageSrc} alt='screenshot of project' borderRadius='lg'/>
                    <Text>
                        {project.projectDescription}
                    </Text>
                </CardBody>
                <CardFooter>
                    Footer
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
