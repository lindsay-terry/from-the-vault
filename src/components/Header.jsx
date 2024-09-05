import Nav from './Nav';
import { Heading, Flex } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
    const styles = {
        customHeader: {
            fontFamily: 'Handlee, cursive',
        }
    }

    return (
        <Flex justifyContent='space-between' style={styles.customHeader}>
                <Heading size='lg' style={styles.customHeader} p={3} m={3}> <TypeAnimation sequence={['Lindsay Terry']} speed={400} cursor={false} />  </Heading>
            <Nav />
        </Flex>
    )
}