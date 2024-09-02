import Project from '../Project';
import { Button, Flex } from '@chakra-ui/react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Carousel({projects}) {
    const [ projectIndex, setProjectIndex ] = useState(0);

    // const buttonSpan = projects.length;
    // Functions to update index of project to display based on button clicks
    const toggleRight = () => {
        setProjectIndex(projectIndex + 1);
    }

    const toggleLeft = () => {
        setProjectIndex(projectIndex - 1);
    }

    useEffect(() => {
        console.log(projectIndex);
    })

    return (
        <Flex justify='space-around' align='center'>
            <Button onClick={toggleLeft}> <SlArrowLeft /> </Button>
                {/* Pass projects and projectIndex state variable to Project component */}
                <Project projects={projects} projectIndex={projectIndex}/>
            <Button onClick={toggleRight}> <SlArrowRight /> </Button>
        </Flex>
    );
};

Carousel.propTypes = {
    projects: PropTypes.array.isRequired,
};
