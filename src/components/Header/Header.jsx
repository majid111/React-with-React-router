import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <h3>NavBar</h3>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
            <Link to='/products'>Products</Link>

        </nav>
    );
};

export default Header;