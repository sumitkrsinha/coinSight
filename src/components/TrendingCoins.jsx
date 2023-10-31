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
          <p className='t-coin-symbol'>{symbol}</p>
          <p className="coin-price t-coin-price">{price} btc</p>
          <p className="market_cap_rank"><b>Rank:</b> {rank}</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingCoins;