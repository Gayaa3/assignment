import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Describe from './components/Describe.js'
import Intrest from './components/Intrest.js';
import InRight from './components/InRight.js';
import MathLevel from './components/MathLevel.js';
import YourWay from './components/Yourway.js';
import Finding from './components/Finding.js';
import Learning from './components/Learning.js';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Describe/>}></Route>
            <Route path="/intrestpage" element={<Intrest/>}></Route>
            <Route path="/inrightpage" element={<InRight/>}></Route>
            <Route path="/mathlevelpage" element={<MathLevel/>}></Route>
            <Route path="/yourwaypage" element={<YourWay/>}></Route>
            <Route path="/findingpage" element={<Finding/>}></Route>
            <Route path="/learningpage" element={<Learning/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    );
}

export default App;
