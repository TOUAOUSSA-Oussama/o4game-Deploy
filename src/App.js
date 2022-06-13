import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Historic from './components/Historic';
import Footer from './components/Footer/Footer';
import About from './components/About';
import Setting from './components/Setting';
import Navbar from './components/Navbar/Navbar';
import {GlobaleStyle} from './AppElements';
import Game_Start from './components/Game_Start/Game_Start';
import Game from './components/Game/Game';

function App() {
  return (
    <div>
      <Router>
        <GlobaleStyle />
        <Navbar />

        <Routes>
            <Route path='/' exact  element={<Home/>} />
            <Route path='/Historic' exact  element={<Historic/>} />
            <Route path='/About' exact  element={<About/>} />
            <Route path='/Setting' exact  element={<Setting/>} />
            <Route path='/Game_Start' exact  element={<Game_Start/>} />
            <Route path='/Game' exact  element={<Game/>} />
        </Routes> 

        <Footer />
      </Router>
    </div>

  );
}

export default App;
