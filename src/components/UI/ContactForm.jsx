import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Textarea, Container, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function ContactForm() {
    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => setInput(event.target.value);
    const handleNameChange = (event) => setName(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    return (
        <Container my={2}>
            <FormControl>
                <FormLabel m={1} color='var(--magnolia)'>Name</FormLabel>
                <Input type='text' value={name} variant='filled' onChange={handleNameChange} m={1} />

                <FormLabel m={1} color='var(--magnolia)'>Email address</FormLabel>
                <Input type='email' value={input} variant='filled' onChange={handleInputChange} m={1} />

                <FormLabel m={1} color='var(--magnolia)'>Message</FormLabel>
                <Textarea value={message} placeholder='What can I do for you?' size='md' variant='filled' onChange={handleMessageChange} m={1} />
                <Button m={2}>Submit</Button>
            </FormControl>
        </Container>
    );
};
