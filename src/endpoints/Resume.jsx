import { Container, Button, Box, Heading, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import Lindsay_Terry_Junior_Developer_Resume from '../assets/Lindsay_Terry_Junior_Developer_Resume.pdf'
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from 'framer-motion';


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

    // Animation variants for skills list
    const listVariants = {
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      };
      
      const containerVariants = {
        visible: {
          transition: {
            staggerChildren: 0.3, // Stagger each item by 0.3 seconds
          },
        },
      };
    
    return (
        <Container display='flex' justifyContent='center' p={2}>
            <SimpleGrid columns={{sm: 1, md:2}} spacing={6}>
                <Box style={styles.background} m={3}>
                    <Heading color='var(--honeydew)' size='md' m={3}>Frontend Developer with Full-Stack Experience</Heading>
                    {/* Applying animation to container  */}
                    <motion.div initial={'hidden'} animate='visible' variants={containerVariants}>
                        <List m={3} p={2}>
                            {[
                                'JavaScript', 'React', 'HTML/CSS', 'PostgreSQL/Sequelize', 'MongoDB/Mongoose', 'Node.js', 'Express.js', 'Git',
                            ].map((item, index) => (
                                // Applying animation for each list item
                                <motion.div key={index} variants={listVariants}>
                                    <ListItem  color='var(--honeydew)' display='flex' m={2}>
                                        <FaCircleCheck /> {item}
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>
                    </motion.div>
                </Box>
                <Box style={styles.background} m={3} display='flex' justifyContent='center' alignItems='center'>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Button >
                            <a  href={Lindsay_Terry_Junior_Developer_Resume} download='Lindsay_Terry_Resume' >Download CV</a>
                        </Button>
                    </motion.div>
                </Box>  
            </SimpleGrid>
        </Container>
    );
};