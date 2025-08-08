import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Create from '../Pages/Create'
import About from '../Pages/About'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SigleProduct'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/singleproduct' element={<SingleProduct/>} />
            <Route path='/about' element={<About/>} />
        </Routes>


    </div>
  )
}

export default MainRoutes