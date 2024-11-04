import React from 'react'
import { Link } from 'react-router-dom'
import cryptonixLogo from "../../assets/cryptonixLogo.png"
import arrow_icon from "../../assets/arrow_icon.png"
import "./navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '../../Redux_Saga/coinSlice'
const Navbar = () => {

  const dispatch=useDispatch()
  const currency=useSelector((state)=> state.coin.currency)


  const currencyHandler = (event) => {
    if (event.target.value === 'usd') {
      dispatch(setCurrency({ name: 'usd', symbol: '$' }));
    } else if (event.target.value === 'eur') {
      dispatch(setCurrency({ name: 'eur', symbol: '€' }));
    } else if (event.target.value === 'inr') {
      dispatch(setCurrency({ name: 'inr', symbol: '₹' }));
    } else {
      dispatch(setCurrency({ name: 'usd', symbol: '$' }));
    }
  };
  


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
        <select onChange={currencyHandler} value={currency.name}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select>
        <button>Sign Up <img src={arrow_icon} /></button>
      </div>
    </div>
    </>
  )
}

export default Navbar
