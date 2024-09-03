import { Container, Button, Box, Heading, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import Lindsay_Terry_Junior_Developer_Resume from '../assets/Lindsay_Terry_Junior_Developer_Resume.pdf'
import { FaCircleCheck } from "react-icons/fa6";



export default function Resume() {
    const styles= {
        background: {
            background: 'var(--black)',
            opacity: '0.75',
            width: '100%',
            borderRadius: '30px'
        }
    }
    
    return (
        <Container display='flex' justifyContent='center' p={2}>
            <SimpleGrid columns={{sm: 1, md:2}} spacing={6}>
                <Box style={styles.background} m={3}>
                    <Heading color='var(--white)' size='md' m={3}>Full-Stack Development</Heading>
                    <List m={3}>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> JavaScript
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> React
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> HTML/CSS
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> PostgreSQL/Sequelize
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> MongoDB/Mongoose
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> Node JS
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> Express JS
                        </ListItem>
                        <ListItem color='var(--white)' display='flex' m={2}>
                            <FaCircleCheck /> Git
                        </ListItem>
                    </List>
                </Box>
                <Box style={styles.background} m={3} display='flex' justifyContent='center' alignItems='center'>
                    <Button>
                        <a href={Lindsay_Terry_Junior_Developer_Resume} download='Lindsay_Terry_Resume' >Download resume </a>
                    </Button>
                </Box>  
            </SimpleGrid>
        </Container>
    );
}