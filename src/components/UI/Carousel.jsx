import Project from '../Project';
import { Button, Flex } from '@chakra-ui/react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


export default function Carousel() {
  
    return (
        <Flex justify='space-around' align='center'>
            <Button> <SlArrowLeft /> </Button>
                <Project />
            <Button> <SlArrowRight /> </Button>
        </Flex>
    );
}