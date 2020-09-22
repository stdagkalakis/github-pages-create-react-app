import React from 'react';
import logo from './logo.svg';
import './App.css';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="App">
      
      <AliceCarousel autoPlay autoPlayInterval="3000" style={{ height: '500px' }}>
            <img src="https://rkb86td9.tinifycdn.com/img/img1.jpg" className="slideimg"/>
            <img src="https://rkb86td9.tinifycdn.com/img/img1.jpg" className="slideimg"/>
            <img src="https://rkb86td9.tinifycdn.com/img/img2.jpg" className="slideimg"/>
            <img src= "https://rkb86td9.tinifycdn.com/img/img3.jpg" className="slideimg"/>
      </AliceCarousel>
    </div>
  );
}

export default App;
