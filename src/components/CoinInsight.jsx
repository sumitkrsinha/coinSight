import React, { useEffect, useState } from 'react';
import Navigationbar from './Navigationbar';
import './style/coininsight.css';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import Coincomp from './Coins';

const CoinInsight = () => {

  const [coin , setCoin] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en').then(
      res => {
        setCoin(res.data);
        // console.log(res.data);
      }
    )
  },[])

  const displaycoin = coin;
  return (
    <div className='coinsights-container'>
      <Navigationbar />
      <div className="search">
        <input 
          type="text" 
          className="coin-input" 
          
          placeholder='Enter Coin Name...' 
           />
        <div className="search-icon"><CiSearch /></div>
      </div>
      <div className="display_coin">
        {displaycoin.map(coin => {
          return (
            <Coincomp 
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h} />
          );
        })}
      </div>  
    </div>
  )
}

export default CoinInsight;