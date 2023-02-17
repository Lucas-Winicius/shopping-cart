import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ErrorPage from './components/ErrorPage'
import './styles/main.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  // errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
