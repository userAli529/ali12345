import React, { useState, createContext, useEffect } from 'react'
import axios from '../axios'

export const DataContext = createContext()
const AppContext = ({ children }) => {
    const [user, setUser] = useState()
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(()=> {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })
    const getProducts = async () => {
        try {
            const { data } = await axios.get()
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
      };
      
    const value = {
        user, 
        products,
        cart,
        addToCart,
        clearCart
    };
    useEffect(() => {
        getProducts()
    }, [])
   
    console.log(products, 'test');
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default AppContext