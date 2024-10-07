import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import UkraineTime from './components/UkraineTime';
import OtherTimes from './components/OtherTimes';

function App() {
  const [timeZones] = useState([
    { name: 'Washington', timeZone: 'America/New_York' },
    { name: 'UTC', timeZone: 'UTC' },
    { name: 'Hong Kong', timeZone: 'Asia/Hong_Kong' },
  ]);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ukraine">Ukraine</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>
      </nav>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ukraine" element={<UkraineTime />} />
          <Route path="/other" element={<OtherTimes timeZones={timeZones} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
