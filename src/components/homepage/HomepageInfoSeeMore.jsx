import React from 'react';

function HomepageInfoSeeMore() {
  return (
    <section className="homepage-info-see-more">
      <div className="see-more-first-section">
        <h2>A excelência é o nosso jeito ninja de ser !</h2>
        <span>
          {`Todas nossas peças passam por um controle rigoroso
        de qualidade para entregarmos o melhor do mundo Nerd a você.`}
        </span>
      </div>
      <div className="see-more-second-section">
        <div className="first-pair">
          <div className="additional-info">
            <span>Compras internacionais e nacionais. *</span>
          </div>
          <div className="additional-info">
            <span>Estampas podem ser personalizadas sob encomenda</span>
          </div>
        </div>
        <div className="second-pair">
          <div className="additional-info">
            Sorteios realizados semanalmente com autorização federal.
          </div>
          <div className="additional-info">
            Devolução em até 7 dias para casos de arrependimento.
          </div>
        </div>
      </div>
      <button type="button">Saiba mais</button>
    </section>
  );
}

export default HomepageInfoSeeMore;
