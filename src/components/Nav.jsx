import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react'

export default function Nav() {

    // const styles = {
    //     customLink: {
    //         textDecoration: 'none',
    //         color: 'var(--magnolia)',
    //         fontWeight: 'bold',
    //         fontSize: '24px',
    //         fontFamily: 'Viga, sans-serif',
    //     },
    // }

    return (
        <Tabs>
            <TabList>
                <Flex justify="space-evenly" p={3} w="100%">
                <Tab>
                    <Link to="/"  >
                    About
                    </Link>
                </Tab>
                <Tab>
                    <Link to="/portfolio" >
                        Portfolio
                    </Link>
                </Tab>
                <Tab>
                    <Link to="/contact">
                        Contact Me
                    </Link>
                </Tab>
                <Tab>
                    <Link to="/resume">
                        Resume
                    </Link>
                </Tab>
                </Flex>
            </TabList>
        </Tabs>
    );
  };