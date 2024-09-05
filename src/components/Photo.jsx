import photo2 from '../assets/images/photo2.jpeg';

export default function Photo() {
    const styles={
        image: {
            boxShadow: '4px 4px 12px var(--night)',
            maxWidth: '400px',
            borderRadius: '50%',
            margin: '10px'
        },
    }
    
    return (
        <img src={photo2} alt='Photo of Lindsay Terry' style={styles.image}/>
    )
}