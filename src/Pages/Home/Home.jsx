import React,{ useEffect, useState } from 'react'
import "./home.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allCoins } from '../../Redux_Saga/coinSlice'
const Home = () => {

const dispatch=useDispatch()
const allCoinsData=useSelector((state)=>state.coin.allCryptoCoin)
const currency =useSelector((state)=>state.coin.currency)

const [displayCoins, setDisplayCoins] = useState([]);
const [input, setInput] = useState('');

useEffect(() => {
  dispatch(allCoins());
}, [dispatch]);

useEffect(() => {
  setDisplayCoins(allCoinsData);
}, [allCoinsData]);

const inputHandler=(event)=>{
  const value = event.target.value;
  setInput(value);
  if (value === "") {
    setDisplayCoins(allCoinsData);
  } else {
    const filteredCoins = allCoinsData.filter((coin) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayCoins(filteredCoins); 
  }
}

const searchHandler=(event)=>{
event.preventDefault()
}



  return (
    <div className='home'>
      <div className="formContainer">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to Cryptonix to explore more about cryptos.</p>

        <form onSubmit={searchHandler}>
          <input type="text" placeholder='Search Cryptos...' onChange={inputHandler} required value={input} list='coinList'/>
<button  type='submit'>Search</button>
        </form>
        <datalist id="coinlist">
            {allCoinsData.map((coin, index) => (
              <option key={index} value={coin.name} />
            ))}
          </datalist>



      </div>
<div className="crypto-table">
  <div className="table-layout">
           <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H Change</p>
            <p className='market-cap'>Market Cap</p>
  </div>
  {displayCoins.slice(0, 12).map((coin, index) => (
          <Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
            <p>{coin.market_cap_rank}</p>
            <div>
              <img src={coin.image} alt={coin.name} />
              <p>{`${coin.name} - ${coin.symbol.toUpperCase()}`}</p>
            </div>
            <p>{`${currency.symbol} ${coin.current_price.toLocaleString()}`}</p>
            <p className={coin.price_change_percentage_24h > 0 ? 'green' : 'red'}>
              {Math.floor(coin.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">{`${currency.symbol} ${coin.market_cap.toLocaleString()}`}</p>
          </Link>
        ))}

</div>

    </div>
  )
}

export default Home

