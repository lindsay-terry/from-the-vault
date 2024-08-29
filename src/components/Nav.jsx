import { Link } from 'react-router-dom';

export default function Nav() {
    // const currentPage = useLocation().pathname;

    const styles = {
        customBackground: {
            background: 'var(--black)',
            opacity: '0.65'
        },

        customLink: {
            textDecoration: 'none',
            color: 'var(--magnolia)',
            fontWeight: 'bold',
            fontSize: '24px',
            fontFamily: 'Viga, sans-serif',
        },

        selectedLink: {
            fontSize: '28px',
        }
    }

    return (
        <nav className="" style={styles.customBackground}>
                <div className="container">
                    <ul className="d-flex justify-content-evenly">
                        <li className="m-3">
                            <Link to="/" style={styles.customLink} >
                                About
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/portfolio" style={styles.customLink}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/contact" style={styles.customLink}>
                                Contact Me
                            </Link>
                        </li>
                        <li className="m-3">
                            <Link to="/resume" style={styles.customLink}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
  }