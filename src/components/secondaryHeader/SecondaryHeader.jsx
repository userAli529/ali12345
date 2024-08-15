import React, { useState, useContext } from 'react'
import './SecondaryHeader.css'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/AppContext'

const SecondaryHeader = () => {
    const context = useContext(DataContext)
    console.log(context);
    const [categories, setCategories] = useState([
        { name: 'Plant pots', rout: 'plantPots' },
        { name: 'Ceramics', rout: 'ceramics' },
        { name: 'Tables', rout: 'tables' },
        { name: 'Chairs', rout: 'chairs' },
        { name: 'Crockery', rout: 'crockery' },
        { name: 'Tableware', rout: 'tableware' },
        { name: 'Cutlery', rout: 'cutlery' },
    ])
    return (
        <div className='sec-header'>
            <div className='top-head'>
                <NavLink to={'/home'}><h1>Avion</h1></NavLink>
                <div className='nav-top'>
                    <div className='nav-links'>
                        <a href="">About us</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                    </div>
                    <div className='nav-icons'>
                        <img src="./src/assets/search.svg" alt="" />
                        <NavLink to={'/cart'}><img src="./src/assets/cart.svg" alt="" /></NavLink>
                        <img src="./src/assets/user.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bot-head'>
                <ul className='navList'>
                    {categories.map((categ) => (
                        <li><NavLink to={`/${categ.rout}`}>{categ.name}</NavLink></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SecondaryHeader