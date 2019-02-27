import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <Link href='/items'>
        <a>Projects</a>
      </Link>
      <Link href='/sell'>
        <a>Resume</a>
      </Link>
      <Link href='/signup'>
        <a>About</a>
      </Link>
      <Link href='/orders'>
        <a>Random</a>
      </Link>
      <Link href='/me'>
        <a>Contact</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;