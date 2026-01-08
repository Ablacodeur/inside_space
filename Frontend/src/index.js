import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home/Home.jsx';
import Destination from './pages/destination/Destination.jsx';
import Technology from './pages/technology/Technology.jsx';
import Crew from './pages/crew/Crew.jsx';
import Mars from './pages/destination/Mars.jsx';
import Titan from './pages/destination/Titan.jsx';
import Europe from './pages/destination/Europe.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/destination/mars' element={<Mars />} />
        <Route path='/destination/europa' element={<Europe/>} />
        <Route path='/destination/titan' element={<Titan />} />


      </Route>


    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

