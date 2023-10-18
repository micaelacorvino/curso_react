import './CartWidgets.css';
import cart from './assets/cart.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../../context/CartContext'; 

const CartWidget = () => {
    //no existe en el contexto, hay que crearlo
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='CartImg' src={cart} alt='cart-widget' />
            {/* {totalQuantity().toString()}  */}
        </Link>
    );
}

export default CartWidget;