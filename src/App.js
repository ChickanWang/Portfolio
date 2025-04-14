import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
