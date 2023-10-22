import React from 'react';
import './style/coins.css';

const Coins = ({image, name, symbol, price, priceChange}) => {
  return (
    <div className='coin-container'>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          {/* <p className='coin-symbol'>{symbol}</p> */}
        </div>
        <div className="coin-data">
          <p className='coin-symbol'>{symbol}</p>
          <p className="coin-price">${price}</p>
          {priceChange < 0 ? (
              <p className="price_change red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="price_change green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Coins;