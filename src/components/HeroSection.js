import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          path="/contact"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'> GET STARTED</Button>
      </div>
    </div>
  );
}

export default HeroSection;
