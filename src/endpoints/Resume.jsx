// import { Flex, Button, Container, Heading, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { Flex,Container, Heading, Text } from '@chakra-ui/react';
import TechStacks from '../components/TechStacks';
// import Lindsay_Terry_Junior_Developer_Resume from '../assets/Lindsay_Terry_Junior_Developer_Resume.pdf'
// import { FaCircleCheck } from "react-icons/fa6";



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
            <Text color='var(--honeydew)'>Icons by <a href='https://icons8.com/'>icons8</a></Text>
            </Flex>
            
         </Container>
    );
};


{/* <Flex direction='column' style={styles.background} m={3}>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <Heading color='var(--honeydew)' size='md' m={3} p={3}>Frontend Developer with Full-Stack Experience</Heading>
</div>
<SimpleGrid columns={{sm: 1, md:2}} m={2}> */}
{/* Applying animation to container  */}
    // <motion.div initial={'hidden'} animate='visible' variants={containerVariants}>
        {/* List of skills  */}
        // <List m={3} p={2}>
            // {[
                // 'HTML/CSS', 'PostgreSQL/Sequelize', 'MongoDB/Mongoose', 'Node.js', 'Express.js', 'Git',
            // ].map((item, index) => (
                // Applying animation for each list item
    //             <motion.div key={index} variants={listVariants}>
    //                 <ListItem  color='var(--honeydew)' display='flex' m={2}>
    //                     <FaCircleCheck /> <Text mx={2}>{item}</Text> 
    //                 </ListItem>
    //             </motion.div>
    //         ))}
    //     </List>
    // </motion.div>
    {/* Download resume button  */}
//     <Button m={3} p={2} aria-label='Download CV'>
//         <a  href={Lindsay_Terry_Junior_Developer_Resume} download='Lindsay_Terry_Resume' >Download CV</a>
//     </Button>
// </SimpleGrid>
// </Flex>