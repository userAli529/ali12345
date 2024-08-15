import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Products from '../../pages/Products'
import ProductDetail from '../../pages/ProductDetail'
import Chairs from '../../pages/Chairs'
import Tables from '../../pages/Tables'
import Crockery from '../../pages/Crockery'
import Cutlery from '../../pages/Cutlery'
import Tableware from '../../pages/Tableware'
import PlantPots from '../../pages/PlantPots'
import Ceramics from '../../pages/Ceramics'
import Cart from '../../pages/Cart'

const Layout = () => {
  return (
    <div>      
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='cart' element = {<Cart/>}/>
            <Route path='/products' element = {<Products/>} />
            <Route path='/product/:id' element = {<ProductDetail/>} />
            <Route path='/ceramics' element = {<Ceramics/>} />
            <Route path='/chairs' element = {<Chairs/>} />
            <Route path='/tables' element = {<Tables/>} />
            <Route path='/cutlery' element = {<Cutlery/>} />
            <Route path='/plantPots' element = {<PlantPots/>} />
            <Route path='/crockery' element = {<Crockery/>} />
            <Route path='/tableware' element = {<Tableware/>} />
            <Route path='/home' element = {<Home/>}/>
        </Routes>
    </div>
  )
}

export default Layout