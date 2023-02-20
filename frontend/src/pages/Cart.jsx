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

            {
                cartItems.length > 0 && (
                    <>
                        <div className="products">{cartItems
                            .map((cartItem, index) => (
                                <CartProduct product={cartItem} cartIndex={index} key={index}/>))}
                        </div>
                        <div className="products">Teste</div>
                    </>
                )
            }

            {
                cartItems.length <= 0 && 
                    <div className="emptyCart">
                        <Link to="/">
                            <p><MdOutlineAddShoppingCart id="cartAdd"/> Adicione um produto</p>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default Cart