import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import TopHeader from './components/TopHeader';
import DashBoard from './components/DashBoard';
import Home from './components/Home';

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className="App">
      <Router>
        <TopHeader nav={nav} setNav={setNav} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Home" element={<Home />} />
          <Route
            path="/dashboard"
            element={<DashBoard nav={nav} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// const app =       {

// <Router>
//         <TopHeader nav={nav} setNav={setNav} />
//         <Routes>
//           <Route path="/" element={<DashBoard nav={nav} />} />
//         </Routes>
//       </Router>
//      }
