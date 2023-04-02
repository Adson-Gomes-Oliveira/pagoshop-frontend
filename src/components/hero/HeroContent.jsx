import React from 'react';
import FlashLogo from '../../assets/svg/flash-logo.svg';
import GotLogo from '../../assets/svg/got-logo.svg';
import KonohaLogo from '../../assets/svg/konoha-logo.svg';
import '../styles/HeroContent.css';

function HeroContent() {
  return (
    <section className="hero-content">
      <span>Confira nossos produtos premium</span>
      <span>Eleve seu estilo a um próximo nível !</span>
      <button type="button">Comprar</button>
      <div className="add-info">
        <div className="info-add">
          <img src={FlashLogo} alt="Flash logo" />
          <div className="info-divisor" />
          <span>Envio rápido em no máximo 5 dias</span>
        </div>
        <div className="info-add">
          <img src={GotLogo} alt="Game of Thrones logo" />
          <div className="info-divisor" />
          <span>Testado e provado com os mais altos padrões</span>
        </div>
        <div className="info-add">
          <img src={KonohaLogo} alt="Konoha logo" />
          <div className="info-divisor" />
          <span>Serviço ao cliente disponível 24h</span>
        </div>
      </div>
    </section>
  );
}

export default HeroContent;
