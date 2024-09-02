import Project from '../Project';
import { Button, Flex } from '@chakra-ui/react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Carousel({projects}) {
    const [ projectIndex, setProjectIndex ] = useState(0);

    const buttonSpan = projects.length;
    // Functions to update index of project to display based on button clicks
    const toggleRight = () => {
        setProjectIndex(projectIndex + 1);
        // Go back to index 0 at the end of the list
        if (projectIndex === buttonSpan -1) {
            setProjectIndex(0);
        }
    }

    const toggleLeft = () => {
        setProjectIndex(projectIndex - 1);
        if (projectIndex === 0) {
            // Go back to the end of list if at index 0
            setProjectIndex(buttonSpan -1);
        }
    }

    return (
        <Flex justify='space-between' align='center'>
            <Button onClick={toggleLeft} mx={1}> <SlArrowLeft /> </Button>
                {/* Pass projects and projectIndex state variable to Project component */}
                <Project projects={projects} projectIndex={projectIndex}/>
            <Button onClick={toggleRight} mx={1}> <SlArrowRight /> </Button>
        </Flex>
    );
};

Carousel.propTypes = {
    projects: PropTypes.array.isRequired,
};
