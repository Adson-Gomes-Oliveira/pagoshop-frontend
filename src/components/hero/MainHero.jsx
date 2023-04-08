/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import MainHeader from '../header/MainHeader';
import HeroContent from './HeroContent';
import HeroVideoMP4 from '../../assets/videos/hero-video.mp4';
import HeroVideoWEBM from '../../assets/videos/hero-video.webm';
import '../styles/MainHero.css';

function MainHero() {
  return (
    <section className="main-hero">
      <MainHeader />
      <HeroContent />
      <video autoPlay muted loop className="hero-video" width="300px" height="100px">
        <source src={HeroVideoMP4} type="video/mp4" />
        <source src={HeroVideoWEBM} type="video/webm" />
      </video>
    </section>
  );
}

export default MainHero;
