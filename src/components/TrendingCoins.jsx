import React from 'react';
import './style/coins.css';

const TrendingCoins = ({image, name, symbol, price, rank}) => {
  return (
    <div className='coin-container'>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <p className='coin-symbol'>{symbol}</p>
          <p className="coin-price">{price.toFixed(5)}btc</p>
          <p className="market_cap_rank">Rank:{rank}</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingCoins;