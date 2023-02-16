import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState([])

  onclick = e => {
    if(e.target.classList.contains('buy')) {
      const el = e.target
      const product = products[el.value]
      const cartItems = [...cart]
      cartItems.push(product)
      setCart(cartItems)
    }
  }

  useEffect(() => {
      fetch('https://lucas-winicius.github.io/shopping-cart/backend/db.json')
          .then(response => response.json())
          .then(products => products.produtos)
          .then(data => setProducts([...data]))
          .catch(error => console.error(error))
          .finally(() => console.log("Fim da requisição."))
  }, [])

  return (
    <div className="App">
      <NavBar cartLength={cart.length} />
      <Outlet context={{products, cart}} />
      <Footer />
    </div>
  )
}

export default App
