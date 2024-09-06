import ContactIcons from './ContactIcons';
import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, Card, CardHeader, CardBody, Heading, Text, Avatar} from '@chakra-ui/react';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import photo2 from '../assets/images/photo2.jpeg';

export default function ContactInfo({ setContactView }) {

    // change View state to render form
    const changeView = () => {
        setContactView('viewForm')
    }

    return (
        <Box>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                <Container>
                    <Card variant='filled' size='sm' m='2'>
                        <CardHeader display='flex' justifyContent='space-evenly' alignItems='center'>
                            <Heading size='sm'>Contact Me</Heading>
                            <Avatar src={photo2} alt='avatar image of Lindsay Terry'/>
                        </CardHeader>
                        <CardBody>
                            <Box display='flex'>
                                <Heading size='xs'><FaPhone /></Heading>
                                <Text p='2' fontSize='sm'>801-652-2807</Text>
                            </Box>
                            <Box display='flex'>
                                <Heading size='xs'><MdEmail /></Heading>
                                <Text p='2' fontSize='sm'>lindsaytee66@gmail.com</Text>
                            </Box>
                        </CardBody>
                    </Card>
                </Container>
                <ContactIcons />
                <Button onClick={changeView} aria-label='View message form'>Send a Message</Button>
            </Flex>
        </Box>
        
    );
};

// Using propTypes on setContactView to ensure it is a function and that it is provided
ContactInfo.propTypes = {
    setContactView: PropTypes.func.isRequired,
};