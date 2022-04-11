import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Card, { createCard } from './components/Card.jsx';
import './App.css';
import data from './data.js'
import ReactAudioPlayer from 'react-audio-player';
import ost from './ost.mp3';


ReactDOM.render(
  <div>
    <Header />

    <Card />
    <ReactAudioPlayer
      src={ost}
      autoPlay
      control
    />
    <Footer />
  </div>
  ,
  document.getElementById("root")
);


