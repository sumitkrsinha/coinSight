import React from 'react'
import Navigationbar from './Navigationbar';
import hero from './asset/hero-image.png';
import './style/home.css';

const Home = () => {
  return (
    <div className='home-container'>
    <Navigationbar />
    <div >
      <div className="hero-container">
        <div className="hero-image1">
          <img src={hero} alt="Crypto Coins" />
        </div>
        <div className="hero-text">
          <p className="web-name"> CoinSights : Your Gateway to Crypto Insights </p>
          <p className="lines">"Unlock the World of Crypto: Your Trusted Source for In-Depth Coin Analysis and Market Insights. Discover, Analyze, and Invest in Cryptocurrencies with Confidence."</p>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Crypto Coins" />
        </div>
        {/* <div className='btn-cont'>
            <button className="trending-btn">Trendings</button>
            <button className="insight-btn">Insights</button>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default Home