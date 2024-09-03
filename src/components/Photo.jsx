import { Image } from '@chakra-ui/image';

export default function Avatar() {
    const styles={
        image: {
            boxShadow: '4px 4px 12px black',
            maxWidth: '500px'
        },
    }

    return (
        <Image src='/images/photo2.jpeg' borderRadius='full' alt='Photo of Lindsay Terry' style={styles.image} mx={3}/>
    )
}