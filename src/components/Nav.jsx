import { Link } from 'react-router-dom';
// import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <nav>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }