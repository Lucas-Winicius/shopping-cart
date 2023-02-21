import { useOutletContext } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { Link } from 'react-router-dom'
import "../styles/cart.css"

const Cart = () => {
    document.title = 'Carrinho'

    function reducer(products) {
        let totalPrice = 0;
        let discountPrice = 0;
        let discount = 0;

        products.forEach(product => {
            totalPrice += (product.price * product.quanty)
            discountPrice += product.discount ? (product.discountPrice * product.quanty) : (product.price * product.quanty)
            discount += product.discount ? ((product.price - product.discountPrice) * product.quanty) : 0
        });

        return { totalPrice, discountPrice, discount }
    }

    const {cart} = useOutletContext();
    const cartItems = Array.from(cart)
    const amountToPay = reducer(cartItems)

    return (
        <div className="cart">

            {
                cartItems.length > 0 && (
                    <>
                        <div className="products">{cartItems
                            .map((cartItem, index) => (
                                <CartProduct product={cartItem} cartIndex={index} key={index}/>))}
                        </div>
                        <div className="prices">
                            <h1 className="title">Resumo do pedido</h1>
                            <p className="fullPrice">
                                <span>Total</span>
                                <span>R$ {amountToPay.totalPrice.toFixed(2)}</span>
                            </p>
                            <p className="discount">
                                <span>Desconto</span>
                                <span>R$ {amountToPay.discount.toFixed(2)}</span>
                            </p>
                            <p>
                                <span>Preço Final</span>
                                <span>R$ {amountToPay.discountPrice.toFixed(2)}</span>
                            </p>
                            <button>Comprar</button>
                        </div>
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