import ContactBox from '../components/ContactBox';
import { Container } from '@chakra-ui/react';

export default function Contact() {
    // Background container for contact components
    const styles = {
        customBackground: {
            background: 'var(--night)',
            opacity: '0.85',
            borderRadius: '30px',
            boxShadow: '4px 4px 12px var(--night)',
        }
    }

    return (
        <Container p={7} my={2} style={styles.customBackground}>
            <ContactBox /> 
        </Container>
    );
}