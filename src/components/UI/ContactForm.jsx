import { FormControl, FormLabel, FormErrorMessage, Input, Textarea, Container, Button, Grid } from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import { useState } from 'react';

export default function ContactForm() {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
      };
    // useState for form
    const [formData, setFormData] = useState(initialFormData);

    // useState for form errors
    const [errors, setError] = useState({
        name: '',
        email: '',
        message: '',
    });

    // handle changes in form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleValidate = () => {
        const newError = {};
        if (!formData.name) newError.name = 'Name is required';
        if (!formData.email) newError.email = 'Email is required';
        if (!formData.message) newError.message = 'Message is required';
        setError(newError);
        
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidate()) {
            console.log('Form submitted:', formData);
            setFormData(initialFormData);
        }
    };

    return (
        <Container my={2}>
            <Form onSubmit={handleSubmit}>
                <FormControl isInvalid={!!errors.name} mb={3}>
                    <FormLabel color='var(--magnolia)'>Name:</FormLabel>
                    <Input type='text' value={formData.name} name='name' onChange={handleChange} background/>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email} mb={3}>
                    <FormLabel color='var(--magnolia)'>Email:</FormLabel>
                    <Input type='email' value={formData.email} name='email' onChange={handleChange} background/>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.message} mb={3}>
                    <FormLabel color='var(--magnolia)' >Message:</FormLabel>
                    <Textarea placeholder="What can I do for you?" value={formData.message} name='message' onChange={handleChange} background/>
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                    <Button type='submit'>Submit</Button>
                    <Button>See My Info</Button>
                </Grid>

            </Form>
            
        </Container>
    );
};