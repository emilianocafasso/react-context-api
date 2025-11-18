import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Homapage from './pages/Homapage'
import About from './pages/About'
import Products from './pages/Products'
import DefaultLayout from './Layouts/DefaultLayout'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Homapage />} />
            <Route path='/chi-siamo' element={<About />} />
            <Route path='/prodotti' element={<Products />} />
            <Route path='/prodotti/:id' element={<ProductPage />} />
          </Route >
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
