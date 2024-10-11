// import photo2 from '../assets/images/photo2.jpeg';
import nature from '../assets/images/nature.jpeg';

export default function Photo() {
    const styles={
        image: {
            boxShadow: '0 4px 12px var(--night)',
            maxHeight: '400px',
            borderRadius: '15%',
            margin: '10px'
        },
    }
    
    return (
        <img src={nature} alt='Photo of Lindsay Terry' style={styles.image}/>
    )
}