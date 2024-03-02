import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Products from '../features/products/Products'

function HomePage() {
  return (
    <>
    <Navbar>
        <Products/>
    </Navbar>
    </>
  )
}

export default HomePage