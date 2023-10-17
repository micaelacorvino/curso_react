
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem/CartItem'
import { link } from 'react-router-dom'

const Cart = () => {
    const { cart, ClearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <link to='/' className='Option'>Productos</link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} /> )}
            <h3>Total: ${total}</h3>
            <button onClick={() => ClearCart()} className="Button">Limpiar carrito</button>
            <link to='/checkout' classname='Option'>checkout</link>
        </div>
    )


}