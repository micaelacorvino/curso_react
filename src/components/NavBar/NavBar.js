
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ciber Techno</h3>
            </Link>
            
            <div className='Categories'>
                <NavLink to={'/category/celular'} ClassName={({ isActive}) => isActive ? 'ActiveOption': 'Option'}></NavLink>
                <NavLink to={'/category/tablet'} ClassName={({ isActive}) => isActive ? 'ActiveOption': 'Option'}></NavLink>
                <NavLink to={'/category/notebook'} ClassName={({ isActive}) => isActive ? 'ActiveOption': 'Option'}></NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;


