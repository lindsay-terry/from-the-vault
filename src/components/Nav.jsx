import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react'

export default function Nav() {

    const styles = {
        customBackground: {
            background: 'var(--black)',
            opacity: '0.55'
        },

        customLink: {
            textDecoration: 'none',
            color: 'var(--magnolia)',
            fontWeight: 'bold',
            fontSize: '24px',
            fontFamily: 'Viga, sans-serif',
        },
    }

    return (
        <Tabs>
            <TabList style={styles.customBackground}>
                <Flex justify="space-evenly" p={3} w="100%">
                <Tab>
                    <Link to="/" style={styles.customLink} >
                    About
                    </Link>
                </Tab>
                <Tab>
                    <Link to="/portfolio" style={styles.customLink}>
                        Portfolio
                    </Link>
                </Tab>
                <Tab>
                    <Link to="/contact" style={styles.customLink}>
                        Contact Me
                    </Link>
                </Tab>
                <Tab>
                    <Link to="/resume" style={styles.customLink}>
                        Resume
                    </Link>
                </Tab>
                </Flex>
            </TabList>
        </Tabs>
    );
  };