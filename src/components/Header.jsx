import Nav from './Nav';
import { Heading, Flex } from '@chakra-ui/react';


export default function Header() {
    const styles = {
        customHeader: {
            fontFamily: 'Viga, sans-serif'
        }
    }

    return (
        <Flex justifyContent='space-between' style={styles.customHeader}>
            <Heading size='lg' style={styles.customHeader} p={3}>Lindsay Terry</Heading>
            <Nav />
        </Flex>
    )
}