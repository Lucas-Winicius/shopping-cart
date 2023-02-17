import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  function thisProductExists(product, array) {
    const quanty = product.quanty || 0
    product.quanty && delete product.quanty
    const includes = Array.from(array).includes(product)
    const index = Array.from(array).indexOf(product)

    product.quanty = quanty
    product.quanty++

    return { includes, index, product }
  }

  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState([])

  onclick = e => {
    if(e.target.classList.contains('buy')) {
      const el = e.target
      const product = products[el.value]
      const cartItems = [...cart]
      const exists = thisProductExists(product, cartItems)

      if(exists.includes) cartItems[exists.index] = exists.product
      else cartItems.push(product)

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
