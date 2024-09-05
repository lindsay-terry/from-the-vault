import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';

export default function Nav() {
    const location = useLocation();

    const styles={
        activeLink: {
            color: 'var(--bittersweet)'
        },
        inactiveLink: {
            textDecoration: 'none',
        },
    }

    return (
        <Box p={3}>
            <Flex justify="space-evenly" w="100%" direction={{ base: 'column', md: 'row'}}>
                <Button variant='ghost' borderRadius='full'>
                    <Link to="/" style={location.pathname === '/' ? styles.activeLink : styles.inactiveLink}>
                        About
                    </Link>
                </Button>
                <Button variant='ghost' borderRadius='full'>
                    <Link to="/portfolio" style={location.pathname === '/portfolio' ? styles.activeLink : styles.inactiveLink}>
                        Portfolio
                    </Link>
                </Button>
                <Button variant='ghost' borderRadius='full'>
                    <Link to="/contact" style={location.pathname === '/contact' ? styles.activeLink : styles.inactiveLink}>
                        Contact Me
                    </Link>
                </Button>
                <Button variant='ghost' borderRadius='full'>
                    <Link to="/resume" style={location.pathname === '/resume' ? styles.activeLink : styles.inactiveLink}>
                        Resume
                    </Link>
                </Button>
            </Flex>
        </Box>
    );
  };

