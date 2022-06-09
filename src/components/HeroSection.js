import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h2>Finally A Professional Electrical Installation
      Services for your <b>Home</b> and <b>Business</b> </h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          path="/contact"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>REACH US</Button>
      </div>
    </div>
  );
}

export default HeroSection;
