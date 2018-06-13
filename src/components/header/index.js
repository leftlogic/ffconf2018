import Link from 'next/link';

import MainNav from '../main-nav';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <MainNav />
      </nav>
    </header>
  );
};

export default Header;
