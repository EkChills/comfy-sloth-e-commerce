import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, SingleProduct, Cart, Error,
About, Products, PrivateRoute, Checkout} from './pages'
import AuthWrapper from './pages/AuthWrapper'

function App() {
  return(
    <AuthWrapper>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/checkout' element={<PrivateRoute>
          <Checkout />
        </PrivateRoute>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
