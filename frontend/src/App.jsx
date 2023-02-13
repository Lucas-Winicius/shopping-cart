import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/cart">Carrinho</Link>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default App
