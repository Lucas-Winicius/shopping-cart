import "../styles/cartProduct.css"

const CartProduct = ({product, cartIndex}) => {

    return (
        <div className="cartProduct">
            <div className="imageContainer">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="productInfo">
                <p>{ product.name }</p>
                <p>{ product.description }</p>
                <p>{ product.price }</p>
            </div>
            <div className="quanty">
                <span className="quantyContainer" value={cartIndex}>
                    <button className="removeQuanty">-</button>
                    <input type="text" name="quanty" value={product.quanty} disabled/>
                    <button className="addQuanty">+</button>
                </span>
            </div>
        </div>
    )
}

export default CartProduct