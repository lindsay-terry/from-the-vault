import { Flex,Container, Heading, Text, Button, Box } from '@chakra-ui/react';
import TechStacks from '../components/TechStacks';
import Lindsay_Terry_Junior_Developer_Resume from '../assets/Lindsay_Terry_Junior_Developer_Resume.pdf'
import { motion } from 'framer-motion';

export default function Resume() {
    // Styling for background behind elements
    const styles= {
        background: {
            background: 'var(--night)',
            opacity: '0.95',
            width: '100%',
            borderRadius: '30px',
            boxShadow: '0 4px 12px var(--night)'
        },
        customButton: {
            background: 'var(--jade)',
            color: 'var(--seasalt)'
        }
    }

    return (
        <Container display='flex' justifyContent='center' style={styles.background}>
            <Flex direction='column' styles={styles.background} m={3}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Heading color='var(--seasalt)' size='md' m={3} p={3}>Frontend Developer with Full-Stack Experience</Heading>
                </div>
            <TechStacks />
                <Box display='flex' justifyContent='space-evenly' p={5}>
                    <Text p={5}color='var(--seasalt)'>Icons by <a href='https://icons8.com/'>Icons8</a></Text>
                    {/* Download resume button  */}
                    <motion.div whileHover={{ scale: 1.2 }}>
                    <Button style={styles.customButton} m={3} p={2} aria-label='Download CV'>
                        <a  href={Lindsay_Terry_Junior_Developer_Resume} download='Lindsay_Terry_Resume' >Download CV</a>
                    </Button>
                    </motion.div>
                </Box>
            </Flex>
         </Container>
    );
};