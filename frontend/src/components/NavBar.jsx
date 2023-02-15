import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const NavBar = ({ cartLength }) => (
    <header>
        <Link to="/" className='link title'>Shopping Cart</Link>
        <Link to="/cart">
                <span className='cartLink'>
                    <FaShoppingCart className='link' />
                    {cartLength > 0 && 
                    <span className='dot'>
                        {cartLength > 99 ? ":D" : cartLength}
                    </span>
                    }
                </span>
        </Link>
    </header>
)

export default NavBar