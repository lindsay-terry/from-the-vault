import { FormControl, FormLabel, FormErrorMessage, Input, Textarea, Container, Button, Grid, useToast } from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm({ setContactView }) {
    // Initializing useToast hook from Chakra UI
    const toast = useToast();

    //Initializing form
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

    // Check for data in specific field if user clicks out
    const validateField = (name, value) => {
        let errorMessage = '';
        if (!value) {
            switch (name) {
                case 'name':
                    errorMessage = 'Name is required';
                    break;
                case 'email':
                    errorMessage = 'Email is required';
                    break;
                case 'message': 
                    errorMessage = 'Please include a message!';
                    break;
            }
        }
        setError((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    }

    // handle onBlur for individual fields
    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    }

    // Change view state to render contact card
    const changeView = () => {
        setContactView('contactInfo')
    }

    // Check for a valid email address
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    // Validate form elements to ensure they are filled out on submit
    const handleValidate = () => {
        const newError = {};
        if (!formData.name) newError.name = 'Name is required';
        if (!formData.email) {
            newError.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newError.email = 'Invalid email address';
        }
        if (!formData.message) newError.message = 'Message is required';
        setError(newError);
        
        return Object.keys(newError).length === 0;
    };

    // Handle form submission -- for now just console.log data and send positive toast alert
    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidate()) {
            console.log('Form submitted:', formData);
            toast({
                title: 'Form submitted successfully!',
                status: 'success',
                duration: 4000,
                isClosable: true,
            });
            setFormData(initialFormData);
        }
    };

    return (
        <Container my={2}>
            <Form onSubmit={handleSubmit}>
                <FormControl isInvalid={!!errors.name} mb={3}>
                    <FormLabel color='var(--seasalt)'>Name:</FormLabel>
                    <Input type='text' value={formData.name} name='name' aria-label='Name' onChange={handleChange} onBlur={handleBlur} background/>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email} mb={3}>
                    <FormLabel color='var(--seasalt)'>Email:</FormLabel>
                    <Input type='email' value={formData.email} name='email' aria-label='Email' onChange={handleChange} onBlur={handleBlur} background/>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.message} mb={3}>
                    <FormLabel color='var(--seasalt)' >Message:</FormLabel>
                    <Textarea placeholder="What can I do for you?" value={formData.message} name='message' aria-label='Enter message' onChange={handleChange} onBlur={handleBlur} background/>
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <Grid templateColumns='repeat(2, 1fr)' gap={3} display='flex' justifyContent='space-evenly'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Button style={{background: 'var(--jade)', color: 'var(--seasalt)'}} type='submit' aria-label='Submit form'>Submit</Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Button style={{background: 'var(--jade)', color: 'var(--seasalt)'}} onClick={changeView} aria-label='Back to contact info'>See My Info</Button>
                    </motion.div>
                </Grid>
            </Form>
        </Container>
    );
};

// Using propTypes on setContactView to ensure it is a function and that it is provided
ContactForm.propTypes = {
    setContactView: PropTypes.func.isRequired,
};