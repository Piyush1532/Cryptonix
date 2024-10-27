import React from 'react'
import { Link } from 'react-router-dom'
import cryptonixLogo from "../../assets/cryptonixLogo.png"
import arrow_icon from "../../assets/arrow_icon.png"
import "./navbar.css"
const Navbar = () => {
  return (
    <>
          <div className='navbar'>
      <Link to={"/"}>
      <img src={cryptonixLogo} className='logo' />
       </Link>
      <ul>
      <Link to={"/"}> <li>Home</li></Link> 
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        {/* <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select> */}
        <button>Sign Up <img src={arrow_icon} /></button>
      </div>
    </div>
    </>
  )
}

export default Navbar
