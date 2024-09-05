import Photo from '../components/Photo';
import AboutDetails from '../components/UI/AboutDetails';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function About() {

    return (
        <motion.div initial={{ y: 100 }} animate={{ y: '0%' }} ease="easeInOut">
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='center' p={4} m={2}>
                <AboutDetails />
                <Photo />
            </Flex>
        </motion.div>
    );
}