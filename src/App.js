import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Trending from './components/Trending';
import CoinInsight from './components/CoinInsight';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/coininsight" element={<CoinInsight />} />
          <Route path="/trendings" element={<Trending />} />
          <Route path="/developer" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
