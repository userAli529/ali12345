import React from 'react'
import './Filters.css'

const Filters = () => {
  return (
    <div className='filters'>
        <span>
            <select name="Category" id="">
                <option value="">Category</option>
                <option value="">Plant pots</option>
                <option value="">Ceramics</option>
                <option value="">Tables</option>
                <option value="">Chairs</option>
                <option value="">Crockery</option>
                <option value="">Tableware</option>
                <option value="">Cutlery</option>
            </select>
            <select name="Product type" id="">
                <option value="">Product type</option>
                <option value="">Furniture</option>
                <option value="">Homeware</option>
                <option value="">Sofas</option>
                <option value="">Light fittings</option>
                <option value="">Accessories</option>
            </select>
            <select name="Price" id="">
                <option value="">Price</option>
                <option value="">0 - 100</option>
                <option value="">101 - 250</option>
                <option value="">250 +</option>
            </select>
            <select name="Brand" id="">
                <option value="">Brand</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>

            </select>
        </span>
        <span className='sorting'>
            Sorting by:
            <select name="" id="">
                <option value="">Date added</option>
                <option value="">Price low-high</option>
                <option value="">Price high-low</option>
                <option value="">A-Z</option>
            </select>
        </span>
    </div>
  )
}

export default Filters