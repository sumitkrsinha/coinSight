import React, { useEffect, useState } from 'react';
// import Navigationbar from './Navigationbar';
import axios from 'axios';
import Trendingcoins from './TrendingCoins';
import './style/trending.css';

const Trending = () => {

  const [trendingcoin , setTrendingcoin] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending').then(
      res => {
        setTrendingcoin(res.data.coins);
        console.log(res.data);
      }
    )
  },[])

  // const coins = trendingcoin;

  return (
    <div className='trendingcoins-container coinsights-container'>
      <span className="t-heading">Today's trending coins:</span>

      <div className="display_coin">
        {trendingcoin.map(coin => {
          return(
            <Trendingcoins
              key = {coin.item.id} 
              image={coin.item.thumb}
              name={coin.item.name}
              symbol={coin.item.symbol}
              price={coin.item.price_btc}
              rank={coin.item.market_cap_rank} />
          );
        })}
      </div>
    </div>
  )
}

export default Trending;