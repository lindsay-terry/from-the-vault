import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function contactIcons() {
    // Custom color and size for contact Icons
    const styles= {
        icon: {
            color: 'var(--jade)',
            fontSize: '30px',
        }
    }

    // Github, LinkedIn, and Hackerrank icons 
    return (
        <Flex justify="center">
            <Box m={1}>
                <a href="https://github.com/lindsay-terry" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <motion.div whileHover={{ scale: 1.5 }}>
                    <FontAwesomeIcon icon={faSquareGithub} alt='Github Icon' aria-label='Link to Github profilie'/>
                    </motion.div>
                </a>
            </Box>
            <Box m={1}>
                <a href="https://www.linkedin.com/in/lindsay-terry/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <motion.div whileHover={{ scale: 1.5 }}>
                    <FontAwesomeIcon icon={faLinkedin} alt='LinkedIn icon' aria-label='Link to Linkedin profilie'/>
                    </motion.div>
                </a>
            </Box>
            <Box m={1}>
                <a href="https://www.hackerrank.com/profile/lindsaytee66" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <motion.div whileHover={{ scale: 1.5 }}>
                    <FontAwesomeIcon icon={faHackerrank} alt='Hackerrank icon' aria-label='Link to Hackerrank profilie'/>
                    </motion.div>
                </a>
            </Box>
        </Flex>
    )
}