import React from 'react';
import './App.scss';
import Header from './components/header/header';
import desktopImage from './assets/header-background.jpg';
import mobileImage from './assets/header-background-mobile.jpg';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/mainContent';
import { mainObjOne } from './components/mainContent/data';

function App() {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <Router> 
        <Header></Header>
        <MainContent {...mainObjOne} />
      </Router>
     
    </div>
  );
}

export default App;