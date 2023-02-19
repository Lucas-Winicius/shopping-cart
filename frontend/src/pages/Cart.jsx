import { useOutletContext } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { Link } from 'react-router-dom'
import "../styles/cart.css"

const Cart = () => {
    document.title = 'Carrinho'

    const {cart} = useOutletContext();
    const cartItems = Array.from(cart)

    return (
        <div className="cart">
            <div className="products">
                {
                    cartItems.length > 0 && cartItems
                        .map((cartItem, index) => (
                            <CartProduct product={cartItem} cartIndex={index} key={index}/>
                        ))
                }{
                    cartItems.length <= 0 && 
                    <div className="emptyCart">
                        <Link to="/">
                        <p><MdOutlineAddShoppingCart id="cartAdd"/> Adicione um produto</p>
                        </Link>
                    </div>
                }
            </div>
            <div className="prices"></div>
        </div>
    )
}

export default Cart