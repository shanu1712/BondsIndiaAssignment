import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useSelector } from 'react-redux'
import Signout from './Signout'
const Navbar = () => {
    const navigate =useNavigate()
    const items= useSelector((state)=>state.cart)
  return (
    <div style={{display:'flex',alignItems:'space-between'}}>
      <Link className='logo' to="/products">Shopify Store</Link>
      <div>
        <Link to="/" className='navlink'>Home</Link>
        <span className='cartcount'>
            Cart Items :{items.length}
        </span>
        <div className='signout'> 
        <Signout />
        </div>
      </div>
    </div>
  )
}

export default Navbar
