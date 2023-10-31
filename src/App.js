import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Trending from './components/Trending';
import CoinInsight from './components/CoinInsight';
// import About from './components/About';
import Navigationbar from './components/Navigationbar';

import './app.css'

function App() {
  return (
    <div className="App">
      <Navigationbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/coininsight" element={<CoinInsight />} />
          <Route path="/trendings" element={<Trending />} />
          {/* <Route path="/developer" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
