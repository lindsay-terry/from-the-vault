import { Flex, Button, Container, Heading, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
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
        <Container display='flex' justifyContent='center' >
            <Flex direction='column' style={styles.background} m={3}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Heading color='var(--honeydew)' size='md' m={3} p={3}>Frontend Developer with Full-Stack Experience</Heading>
                </div>
                <SimpleGrid columns={{sm: 1, md:2}} m={2}>
                {/* Applying animation to container  */}
                    <motion.div initial={'hidden'} animate='visible' variants={containerVariants}>
                        {/* List of skills  */}
                        <List m={3} p={2}>
                            {[
                                'JavaScript', 'React', 'HTML/CSS', 'PostgreSQL/Sequelize', 'MongoDB/Mongoose', 'Node.js', 'Express.js', 'Git',
                            ].map((item, index) => (
                                // Applying animation for each list item
                                <motion.div key={index} variants={listVariants}>
                                    <ListItem  color='var(--honeydew)' display='flex' m={2}>
                                        <FaCircleCheck /> <Text mx={2}>{item}</Text> 
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>
                    </motion.div>
                    {/* Download resume button  */}
                    <Button m={3} p={2} aria-label='Download CV'>
                        <a  href={Lindsay_Terry_Junior_Developer_Resume} download='Lindsay_Terry_Resume' >Download CV</a>
                    </Button>
                </SimpleGrid>
            </Flex>
         </Container>
    );
};