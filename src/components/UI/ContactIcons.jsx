import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'

export default function contactIcons() {

    const styles= {
        icon: {
            color: 'var(--magnolia)',
            fontSize: '30px',
        }
    }

    // Github, LinkedIn, and Hackerrank icons 
    return (
        <div className="d-flex justify-content-center">
            <a href="https://github.com/lindsay-terry" target="_blank" rel="noopener noreferrer" className="mx-1" style={styles.icon}>
                <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a href="https://www.linkedin.com/in/lindsay-terry/" target="_blank" rel="noopener noreferrer" className="mx-1" style={styles.icon}>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.hackerrank.com/profile/lindsaytee66" target="_blank" rel="noopener noreferrer" className="mx-1" style={styles.icon}>
                <FontAwesomeIcon icon={faHackerrank} />
            </a>
        </div>
    )
}