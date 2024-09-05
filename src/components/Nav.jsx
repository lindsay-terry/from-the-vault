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
                <Button aria-label='About' variant='ghost' borderRadius='full' as={Link} to='/' style={location.pathname === '/' ? styles.activeLink : styles.inactiveLink}>
                    About
                </Button>
                <Button aria-label='Portfolio' variant='ghost' borderRadius='full' as={Link} to='/portfolio' style={location.pathname === '/portfolio' ? styles.activeLink : styles.inactiveLink}>
                    Portfolio
                </Button>
                <Button aria-label='Contact Me' variant='ghost' borderRadius='full' as={Link} to='/contact' style={location.pathname === '/contact' ? styles.activeLink : styles.inactiveLink}>
                    Contact Me
                </Button>
                <Button aria-label='Resume' variant='ghost' borderRadius='full' as={Link} to='/resume' style={location.pathname === '/resume' ? styles.activeLink : styles.inactiveLink}>
                    Resume
                </Button>
            </Flex>
        </Box>
    );
  };

