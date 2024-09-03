import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { Flex, Box } from '@chakra-ui/react';

export default function contactIcons() {

    const styles= {
        icon: {
            color: 'var(--bittersweet)',
            fontSize: '30px',
        }
    }

    // Github, LinkedIn, and Hackerrank icons 
    return (
        <Flex justify="center">
            <Box m={1}>
                <a href="https://github.com/lindsay-terry" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FontAwesomeIcon icon={faSquareGithub} />
                </a>
            </Box>
            <Box m={1}>
                <a href="https://www.linkedin.com/in/lindsay-terry/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </Box>
            <Box m={1}>
                <a href="https://www.hackerrank.com/profile/lindsaytee66" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FontAwesomeIcon icon={faHackerrank} />
                </a>
            </Box>
        </Flex>
    )
}