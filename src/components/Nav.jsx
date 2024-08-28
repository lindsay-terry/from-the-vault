import { Link } from 'react-router-dom';
// import Navbar from './UI/Navbar';

export default function Nav() {
    const styles = {
        customBackground: {
            background: 'var(--rich-black)',
            opacity: '0.65'
        },

        customLink: {
            textDecoration: 'none',
            color: 'var(--burnt-sienna)',
            fontWeight: 'bold',
            fontSize: '18px'
        },
    }

    return (
        <nav className="" style={styles.customBackground}>
                <div className="container">
                    <ul className="d-flex justify-content-evenly">
                        <li className="nav-link m-3">
                            <Link to="/" style={styles.customLink}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-link m-3">
                            <Link to="/about" style={styles.customLink}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-link m-3">
                            <Link to="/portfolio" style={styles.customLink}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-link m-3">
                            <Link to="/contact" style={styles.customLink}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
  }