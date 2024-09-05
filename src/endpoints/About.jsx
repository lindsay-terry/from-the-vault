import Photo from '../components/Photo';
import AboutDetails from '../components/UI/AboutDetails';
import { Flex } from '@chakra-ui/react';

export default function About() {

    return (
        <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='center' p={4} m={2}>
            <AboutDetails />
            <Photo />
        </Flex>
    );
}