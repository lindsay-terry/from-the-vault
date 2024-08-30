import ContactForm from '../components/UI/ContactForm';
import { Container } from '@chakra-ui/react';

export default function Contact() {

    const styles = {
        customBackground: {
            background: 'var(--black)',
            opacity: '0.85',
            borderRadius: '30px'
        }
    }

    return (
        <Container p={7} my={2} style={styles.customBackground}>
            <ContactForm />

            {/* </ContactForm> */}
        </Container>
    );
}