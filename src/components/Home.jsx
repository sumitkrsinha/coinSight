import React from "react";
// import Navigationbar from './Navigationbar';
import hero from "./asset/hero-image.png";
import "./style/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-parent">
      <div className="hero-details">
        <div className="hero-text">
          <p className="web-name">
            CoinSights : Your Gateway to Crypto Insights
          </p>
          <p className="lines">
            Unlock the World of Crypto: Your Trusted Source for In-Depth Coin
            Analysis and Market Insights. Discover, Analyze, and Invest in
            Cryptocurrencies with Confidence.
          </p>
          <div className="btn-cont">
            <Link to="/trendings" > <button className="trending-btn btn">Trendings</button> </Link>
            <Link to="/coininsight" > <button className="insight-btn btn">Insights</button> </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Crypto Coins" />
        </div>
      </div>
    </div>
  );
};

export default Home;
