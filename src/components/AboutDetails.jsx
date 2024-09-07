import { Container, Box, Text, Heading } from '@chakra-ui/react';

export default function AboutDetails() {
    const styles={
        customBackground: {
            background: 'var(--night)',
            opacity: '0.95',
            borderRadius: '30px',
            color: 'var(--seasalt)',
            boxShadow: '0 4px 12px var(--night)',
        }
    }
    return (
        <Container style={styles.customBackground} mx={2}>
            <Box>
                <Heading display='flex' justifyContent='center'>
                    Frontend Developer
                </Heading>
                <Text p={2} m={2}>
                    Hello! My name is Lindsay Terry, and I am a dedicated Frontend Developer specializing in JavaScript.  With a strong focus on creating dynamic and responsive user interfaces, I also have experience working with Node.js and full-stack development. 
                </Text>
                <Text p={2} m={2}>
                    I am based out of Salt Lake City, UT, and when I am not coding, I love to casually indulge in bike rides and video games.
                </Text>
                <Text p={2} m={2}>
                    Explore my portfolio, built using React and Chakra UI.  Welcome!
                </Text>
            </Box>
        </Container>
    );
};