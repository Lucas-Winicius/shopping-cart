import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <NavBar cartLength={cart.length} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
