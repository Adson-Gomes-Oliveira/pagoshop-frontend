import React from 'react';
import MarvelLogo from '../../assets/images/logo-marvel.png';
import DcLogo from '../../assets/images/logo-dc.png';
import NetflixLogo from '../../assets/images/logo-netflix.png';
import UniversalLogo from '../../assets/images/logo-universal.png';
import PrimeLogo from '../../assets/images/logo-prime.png';
import '../styles/HomepageSupportedBy.css';

function HomepageSupportedBy() {
  return (
    <section className="homepage-supported-by">
      <h2>Apoiados por</h2>
      <div className="supporters">
        <div><img src={MarvelLogo} alt="Marvel Logo" /></div>
        <div><img src={DcLogo} alt="Dc Logo" /></div>
        <div><img src={NetflixLogo} alt="Netflix Logo" /></div>
        <div><img src={UniversalLogo} alt="Universal Logo" /></div>
        <div><img src={PrimeLogo} alt="Prime Logo" /></div>
      </div>
    </section>
  );
}

export default HomepageSupportedBy;
