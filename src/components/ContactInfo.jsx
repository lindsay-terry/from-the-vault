import ContactIcons from './ContactIcons';
import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, Card, CardHeader, CardBody, Heading, Text, Avatar} from '@chakra-ui/react';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import photo2 from '../assets/images/photo2.jpeg';
import { motion } from 'framer-motion';

export default function ContactInfo({ setContactView }) {

    // change View state to render form
    const changeView = () => {
        setContactView('viewForm')
    }

    return (
        <Box>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                <Container>
                    <Card variant='filled' size='md' m='2'>
                        <CardHeader display='flex' justifyContent='space-evenly' alignItems='center'>
                            <Heading size='lg'>Contact Me</Heading>
                            <Avatar src={photo2} size='lg' alt='avatar image of Lindsay Terry'/>
                        </CardHeader>
                        <CardBody>
                            <Box display='flex'>
                                <Heading size='md'><FaPhone /></Heading>
                                <Text p='2' fontSize='lg'>801-652-2807</Text>
                            </Box>
                            <Box display='flex'>
                                <Heading size='md'><MdEmail /></Heading>
                                <Text p='2' fontSize='lg'>lindsaytee66@gmail.com</Text>
                            </Box>
                        </CardBody>
                    </Card>
                </Container>
                <ContactIcons />
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Button onClick={changeView} style={{background: 'var(--jade)', color: 'var(--seasalt)'}} aria-label='View message form'>Send a Message</Button>
                </motion.div>
            </Flex>
        </Box>
        
    );
};

// Using propTypes on setContactView to ensure it is a function and that it is provided
ContactInfo.propTypes = {
    setContactView: PropTypes.func.isRequired,
};