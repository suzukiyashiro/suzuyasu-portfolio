import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
        <Link to='/' id="logo">
            <p>Yasuhiro Suzuki</p>
        </Link>
    </header>
  );
};

export default Header;
