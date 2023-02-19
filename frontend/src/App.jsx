import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState([{"name":"Produto 1","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":100.5,"discountPrice":10.5,"discount":false,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":9},{"name":"Produto 2","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":50.5,"discountPrice":10.5,"discount":false,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":10},{"name":"Produto 3","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":50,"discountPrice":10.5,"discount":true,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":13},{"name":"Produto 4","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":50,"discountPrice":10.5,"discount":false,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":7},{"name":"Produto 5","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit","price":199.8,"discountPrice":10.5,"discount":true,"imageUrl":"https://i.imgur.com/ulJeQyt.png","quanty":1}])

  function thisProductExists(product, array) {
    const quanty = product.quanty || 0
    product.quanty && delete product.quanty
    const includes = Array.from(array).includes(product)
    const index = Array.from(array).indexOf(product)

    product.quanty = quanty
    product.quanty++

    return { includes, index, product }
  }

  function changeQuanty(product, add) {
    product.quanty = add ? product.quanty + 1 : product.quanty - 1

    return product
  }

  onclick = e => {
    const el = e.target
    const parent = el.parentElement
    const cartItems = [...cart]

    if(el.classList.contains('buy')) {
      const product = products[el.value]
      const exists = thisProductExists(product, cartItems)

      if(exists.includes) cartItems[exists.index] = exists.product
      else cartItems.push(product)

      setCart(cartItems)
      console.log(JSON.stringify(cart))
      document.body.focus()
    }

    if(parent.classList.contains('quantyContainer')) {
      const productID = parent.attributes.value.nodeValue
      const product = cartItems[productID]
      let newProduct;

      if(el.classList.contains('addQuanty')) newProduct = changeQuanty(product, true)
      if(el.classList.contains('removeQuanty')) newProduct = changeQuanty(product, false)

      cartItems[productID] = newProduct
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
