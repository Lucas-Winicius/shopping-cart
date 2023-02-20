import "../styles/product.css"
import { MdOutlineAddShoppingCart } from "react-icons/md"

const Product = props => {
    
    return (
        <div className="productContainer">
            <h1 className="productName">{ props.name }</h1>
            <img src={ props.imageUrl } alt={ props.name } className="image" />
            <p className="description">{ props.description }</p>
            {
                props.discount ? 
                <p className="priceContainer">
                    <span className="priceAfter">R$ { props.price }</span>
                    <span className="priceNow">R$ { props.discountPrice }</span>
                </p> : 
                <p className="price">R$ { props.price }</p>
            }
            <button className="buy" value={ props.index }><MdOutlineAddShoppingCart className="addCart"/> | Comprar</button>
        </div>
    )
}

export default Product