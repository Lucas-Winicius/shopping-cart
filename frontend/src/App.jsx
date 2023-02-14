import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <NavBar cartLength={cart.length} />
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default App
