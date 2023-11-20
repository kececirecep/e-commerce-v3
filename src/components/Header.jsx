import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {

  const items = useSelector((state) => state.cart.items);

  return (
    <header className='py-8 ps-4 bg-blue-300 flex gap-4 underline'>
        <Link to="/">Home Page</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart ({items.length})</Link>
        <Link to="/category">Category</Link>
    </header>
  )
}

export default Header