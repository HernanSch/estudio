import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header';
import About from "./Pages/About/About";
import Contacto from './Pages/Contacto/Contacto';

import React from 'react' 

function App() {
  return (
    <Router>
      <div>
        
        
        <header>
          <Header></Header>
        </header>
        <main>
          <Routes>        
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/about" element={<About></About>}></Route>
            <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          </Routes>
        </main>
        
        
      
        {/* <footer>
          
        </footer> */}
        
      
      </div>
    </Router>
  )
}

export default App;
