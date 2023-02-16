import { useOutletContext } from "react-router-dom";
import Product from "../components/Product"
import "../styles/home.css"

const Home = () => {
    document.title = 'Home'

    const outlet = useOutletContext();

    return (
        <section>
            {
                outlet.products.length == 0 && <p className="errorText">Algo parece vazio por aqui. Tente novamente mais tarde.</p>
            }
            {
                !outlet.products.length == 0 && 
                Array.from(outlet.products).map(({ name, description, price, discountPrice, discount, imageUrl }, index) => 
                <Product 
                    name={name} 
                    description={description} 
                    price={price} 
                    discountPrice={discountPrice} 
                    discount={discount} 
                    imageUrl={imageUrl} 
                    index={index} 
                    key={index}
                />
                )
            }
        </section>
    )
}

export default Home