import "../styles/product.css"
import { FaCartPlus } from "react-icons/fa"

const Product = ({ name, description, price, discountPrice, discount, imageUrl, index }) => {
    
    return (
        <div className="productContainer">
            <h1 className="productName">{ name }</h1>
            <img src={imageUrl} alt={name} className="image" />
            <p className="description">{description}</p>
            {
                discount ? 
                <p className="priceContainer">
                    <span className="priceAfter">R$ {price}</span>
                    <span className="priceNow">R$ {discountPrice}</span>
                </p> : 
                <p className="price">R$ { price }</p>
            }
            <button className="buy" value={index}>Comprar</button>
        </div>
    )
}

export default Product