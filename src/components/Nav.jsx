import { Link } from 'react-router-dom';
// import Navbar from './UI/Navbar';

export default function Nav() {
    return (
    //   <Navbar
    <>

        links={[
          <Link key={1} className="" to="/">
            Home
          </Link>,
          <Link key={2} className="" to="/about">
            About Me
          </Link>,
        ]}
    </>
    //   />
    );
  }