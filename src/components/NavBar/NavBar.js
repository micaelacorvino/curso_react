import CartWidget from "../CartWidget/CartWidget"
import Button from 'react-bootstrap/Button';

const NavBar = () => {  //componente que retorna la parte visual
    return (
        <nav className="bg-secondary">
            <h3>Ciber Techno</h3>
            <div>
                <Button variant="outline-dark">Celulares</Button>
                <Button variant="outline-dark">Notebooks</Button>
                <Button variant="outline-dark">Tablets</Button>
            </div>
            < CartWidget />    
        </nav>
    )
}

export default NavBar


