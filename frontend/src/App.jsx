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
  // [{"name":"Produto 1","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":100.5,"discountPrice":10.5,"discount":false,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":9},{"name":"Produto 2","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":50.5,"discountPrice":10.5,"discount":false,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":10},{"name":"Produto 3","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":50,"discountPrice":10.5,"discount":true,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":13},{"name":"Produto 4","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":50,"discountPrice":10.5,"discount":false,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":7},{"name":"Produto 5","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":199.8,"discountPrice":10.5,"discount":true,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":1}]

  onclick = e => {
    if(e.target.classList.contains('buy')) {
      const el = e.target
      const product = products[el.value]
      const cartItems = [...cart]
      const exists = thisProductExists(product, cartItems)

      if(exists.includes) cartItems[exists.index] = exists.product
      else cartItems.push(product)

      setCart(cartItems)
      console.log(JSON.stringify(cart))
      document.body.focus()
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
