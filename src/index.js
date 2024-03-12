import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Technology from './pages/technology/Technology';
import Crew from './pages/crew/Crew';
import Mars from './pages/destination/Mars';
import Titan from './pages/destination/Titan';
import Europe from './pages/destination/Europe';

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

