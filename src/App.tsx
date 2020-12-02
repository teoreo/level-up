import React from 'react';
import './App.scss';
import Header from './components/header/header';
import desktopImage from './assets/header-background.jpg';
import mobileImage from './assets/header-background-mobile.jpg';


function App() {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <Header></Header>
    </div>
  );
}

export default App;