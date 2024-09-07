import { Flex,Container, Heading, Text, Button, Box } from '@chakra-ui/react';
import TechStacks from '../components/TechStacks';
import Lindsay_Terry_Junior_Developer_Resume from '../assets/Lindsay_Terry_Junior_Developer_Resume.pdf'

export default function Resume() {
    // Styling for background behind elements
    const styles= {
        background: {
            background: 'var(--night)',
            opacity: '0.75',
            width: '100%',
            borderRadius: '30px',
            boxShadow: '4px 4px 12px var(--night)',
        }
    }

    return (
        <Container display='flex' justifyContent='center' style={styles.background}>
            <Flex direction='column' styles={styles.background} m={3}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Heading color='var(--honeydew)' size='md' m={3} p={3}>Frontend Developer with Full-Stack Experience</Heading>
                </div>
            <TechStacks />
                <Box display='flex' justifyContent='space-evenly' p={5}>
                    <Text p={5}color='var(--honeydew)'>Icons by <a href='https://icons8.com/'>Icons8</a></Text>
                    {/* Download resume button  */}
                    <Button m={3} p={2} aria-label='Download CV'>
                        <a  href={Lindsay_Terry_Junior_Developer_Resume} download='Lindsay_Terry_Resume' >Download CV</a>
                    </Button>
                </Box>
            </Flex>
         </Container>
    );
};